"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

interface Message {
  _id: string
  name: string
  email: string
  company?: string
  type: "recruteur" | "startup" | "partenariat" | "autre"
  subject?: string
  message: string
  status: "nouveau" | "lu" | "archive"
  createdAt: string
}

const STORAGE_KEY = "portfolio_admin_token"
const FILTERS = ["tous", "recruteur", "startup", "partenariat", "autre"] as const
type Filter = (typeof FILTERS)[number]
const STATUS_FILTERS = ["tous", "nouveau", "lu", "archive"] as const
type StatusFilter = (typeof STATUS_FILTERS)[number]

const TYPE_BADGE: Record<Message["type"], string> = {
  recruteur: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  startup: "bg-green-500/20 text-green-300 border-green-500/30",
  partenariat: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  autre: "bg-gray-500/20 text-gray-300 border-gray-500/30",
}

const STATUS_BADGE: Record<Message["status"], string> = {
  nouveau: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  lu: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  archive: "bg-gray-500/20 text-gray-400 border-gray-500/30",
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [password, setPassword] = useState("")
  const [loginLoading, setLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)

  const [messages, setMessages] = useState<Message[]>([])
  const [filter, setFilter] = useState<Filter>("tous")
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("tous")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      setToken(stored)
      setAuthenticated(true)
    }
  }, [])

  const fetchMessages = useCallback(
    async (overrideToken?: string) => {
      const activeToken = overrideToken ?? token
      if (!activeToken) return

      setLoading(true)
      setError(null)
      try {
        const params = new URLSearchParams()
        if (filter !== "tous") params.append("type", filter)
        const url = `/api/contact${params.toString() ? `?${params.toString()}` : ""}`
        const res = await fetch(url, {
          headers: { Authorization: `Bearer ${activeToken}` },
        })
        const data = await res.json().catch(() => ({}))

        if (res.ok && data?.success) {
          let filtered = data.messages || []
          if (statusFilter !== "tous") {
            filtered = filtered.filter((m: Message) => m.status === statusFilter)
          }
          if (searchQuery) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter((m: Message) =>
              m.name.toLowerCase().includes(query) ||
              m.email.toLowerCase().includes(query) ||
              (m.company && m.company.toLowerCase().includes(query)) ||
              (m.subject && m.subject.toLowerCase().includes(query)) ||
              m.message.toLowerCase().includes(query)
            )
          }
          setMessages(filtered)
        } else if (res.status === 401) {
          handleLogout()
        } else {
          setError(data?.error || "Failed to load messages")
        }
      } catch {
        setError("Network error")
      } finally {
        setLoading(false)
      }
    },
    [filter, statusFilter, searchQuery, token]
  )

  useEffect(() => {
    if (authenticated && token) {
      fetchMessages()
    }
  }, [authenticated, token, fetchMessages])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginLoading(true)
    setLoginError(null)

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data?.success) {
        sessionStorage.setItem(STORAGE_KEY, password)
        setToken(password)
        setAuthenticated(true)
        setPassword("")
        fetchMessages(password)
      } else {
        setLoginError(data?.error || "Mot de passe incorrect")
      }
    } catch {
      setLoginError("Erreur de connexion")
    } finally {
      setLoginLoading(false)
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY)
    setToken(null)
    setAuthenticated(false)
    setMessages([])
  }

  const updateStatus = async (id: string, status: Message["status"]) => {
    if (!token) return
    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      })
      if (res.ok) {
        fetchMessages()
      }
    } catch {
      setError("Failed to update status")
    }
  }

  const deleteMessage = async (id: string) => {
    if (!token) return
    if (!confirm("Supprimer ce message ?")) return

    try {
      const res = await fetch(`/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
      if (res.ok) {
        fetchMessages()
        setSelectedMessage(null)
      }
    } catch {
      setError("Failed to delete")
    }
  }

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
  }

  const replyByEmail = (email: string, subject?: string) => {
    const mailtoSubject = subject ? `Re: ${subject}` : "Re: Your message"
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(mailtoSubject)}`
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-white/5 border border-gray-800 mb-4">
                <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.105-.895-2-2-2s-2 .895-2 2v3a2 2 0 002 2h0a2 2 0 002-2v-3zM5 11V7a7 7 0 0114 0v4M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-white">Admin privé</h1>
              <p className="text-sm text-gray-400 mt-2">
                Accès réservé. Entrez votre mot de passe.
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500"
                  placeholder="••••••••"
                  required
                  autoFocus
                />
              </div>
              {loginError && (
                <p className="text-red-400 text-sm">{loginError}</p>
              )}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full px-4 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                {loginLoading ? "Connexion..." : "Se connecter"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    )
  }

  const stats = {
    total: messages.length,
    nouveau: messages.filter((m) => m.status === "nouveau").length,
    lu: messages.filter((m) => m.status === "lu").length,
    archive: messages.filter((m) => m.status === "archive").length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Dashboard Admin
              </h1>
              <p className="text-sm text-gray-400 mt-1">
                Messages reçus depuis le formulaire de contact
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => fetchMessages()}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Actualiser
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-600/30 text-red-300 text-sm font-medium rounded-lg transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            <StatCard label="Total" value={stats.total} color="text-white" />
            <StatCard
              label="Nouveaux"
              value={stats.nouveau}
              color="text-yellow-300"
            />
            <StatCard label="Lus" value={stats.lu} color="text-blue-300" />
            <StatCard
              label="Archivés"
              value={stats.archive}
              color="text-gray-400"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4 mb-6">
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors capitalize ${
                    filter === f
                      ? "bg-white text-black border-white"
                      : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {STATUS_FILTERS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatusFilter(s)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors capitalize ${
                    statusFilter === s
                      ? "bg-white text-black border-white"
                      : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom, email, entreprise, sujet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-gray-500"
            />
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {loading && (
            <p className="text-gray-400 text-sm">Chargement...</p>
          )}

          <div className="grid gap-4">
            {messages.map((message) => (
              <motion.div
                key={message._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-5"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-white">
                      {message.name}
                    </h3>
                    <a
                      href={`mailto:${message.email}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors break-all"
                    >
                      {message.email}
                    </a>
                    {message.company && (
                      <p className="text-sm text-gray-400 mt-1">
                        {message.company}
                      </p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[10px] font-medium rounded-full border ${TYPE_BADGE[message.type]}`}
                      >
                        {message.type}
                      </span>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[10px] font-medium rounded-full border ${STATUS_BADGE[message.status]}`}
                      >
                        {message.status}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        {new Date(message.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 shrink-0">
                    <button
                      onClick={() => setSelectedMessage(message)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-200 text-xs rounded-lg transition-colors"
                    >
                      Voir détails
                    </button>
                    {message.status !== "lu" && (
                      <button
                        onClick={() => updateStatus(message._id, "lu")}
                        className="px-3 py-1 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs rounded-lg transition-colors"
                      >
                        Marquer lu
                      </button>
                    )}
                    {message.status !== "archive" && (
                      <button
                        onClick={() => updateStatus(message._id, "archive")}
                        className="px-3 py-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-200 text-xs rounded-lg transition-colors"
                      >
                        Archiver
                      </button>
                    )}
                    {message.status !== "nouveau" && (
                      <button
                        onClick={() => updateStatus(message._id, "nouveau")}
                        className="px-3 py-1 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 text-xs rounded-lg transition-colors"
                      >
                        Remettre nouveau
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(message._id)}
                      className="px-3 py-1 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 text-xs rounded-lg transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
                {message.subject && (
                  <p className="text-sm font-medium text-gray-200 mb-1">
                    Sujet : {message.subject}
                  </p>
                )}
                <p className="text-sm text-gray-300 whitespace-pre-wrap break-words line-clamp-2">
                  {message.message}
                </p>
              </motion.div>
            ))}
          </div>

          {!loading && messages.length === 0 && (
            <div className="text-center py-12 border border-dashed border-gray-800 rounded-xl">
              <p className="text-gray-400">Aucun message dans cette catégorie.</p>
            </div>
          )}

          {/* Detail Modal */}
          {selectedMessage && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-xl font-bold text-white">Détails du message</h2>
                    <button
                      onClick={() => setSelectedMessage(null)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Nom</label>
                      <p className="text-white font-medium">{selectedMessage.name}</p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Email</label>
                      <div className="flex items-center gap-2 mt-1">
                        <a
                          href={`mailto:${selectedMessage.email}`}
                          className="text-white hover:text-accent transition-colors break-all"
                        >
                          {selectedMessage.email}
                        </a>
                        <button
                          onClick={() => copyEmail(selectedMessage.email)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="Copier l'email"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => replyByEmail(selectedMessage.email, selectedMessage.subject)}
                          className="text-gray-400 hover:text-white transition-colors"
                          title="Répondre par email"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    {selectedMessage.company && (
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wide">Entreprise / Startup</label>
                        <p className="text-white">{selectedMessage.company}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Type</label>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border ${TYPE_BADGE[selectedMessage.type]}`}
                      >
                        {selectedMessage.type}
                      </span>
                    </div>
                    {selectedMessage.subject && (
                      <div>
                        <label className="text-xs text-gray-400 uppercase tracking-wide">Sujet</label>
                        <p className="text-white">{selectedMessage.subject}</p>
                      </div>
                    )}
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Message</label>
                      <p className="text-white whitespace-pre-wrap break-words mt-1 bg-gray-800/50 p-3 rounded-lg">
                        {selectedMessage.message}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Date</label>
                      <p className="text-white text-sm">
                        {new Date(selectedMessage.createdAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 uppercase tracking-wide">Statut</label>
                      <span
                        className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full border ${STATUS_BADGE[selectedMessage.status]}`}
                      >
                        {selectedMessage.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-800">
                    {selectedMessage.status !== "lu" && (
                      <button
                        onClick={() => {
                          updateStatus(selectedMessage._id, "lu")
                          setSelectedMessage(null)
                        }}
                        className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-sm rounded-lg transition-colors"
                      >
                        Marquer comme lu
                      </button>
                    )}
                    {selectedMessage.status !== "archive" && (
                      <button
                        onClick={() => {
                          updateStatus(selectedMessage._id, "archive")
                          setSelectedMessage(null)
                        }}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-200 text-sm rounded-lg transition-colors"
                      >
                        Archiver
                      </button>
                    )}
                    {selectedMessage.status !== "nouveau" && (
                      <button
                        onClick={() => {
                          updateStatus(selectedMessage._id, "nouveau")
                          setSelectedMessage(null)
                        }}
                        className="px-4 py-2 bg-yellow-600/20 hover:bg-yellow-600/30 border border-yellow-500/30 text-yellow-300 text-sm rounded-lg transition-colors"
                      >
                        Remettre nouveau
                      </button>
                    )}
                    <button
                      onClick={() => {
                        deleteMessage(selectedMessage._id)
                      }}
                      className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 text-sm rounded-lg transition-colors"
                    >
                      Supprimer
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

function StatCard({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
      <p className="text-xs text-gray-400 uppercase tracking-wide">{label}</p>
      <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
    </div>
  )
}
