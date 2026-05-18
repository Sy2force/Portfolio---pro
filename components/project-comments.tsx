"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Comment {
  _id: string
  authorName: string
  authorEmail: string
  content: string
  createdAt: string
}

interface ProjectCommentsProps {
  projectId: string | number
}

const STORAGE_KEY_OWNED = "portfolio_owned_comments"
const STORAGE_KEY_BROWSER_ID = "portfolio_browser_id"
const STORAGE_KEY_AUTHOR_NAME = "portfolio_author_name"

function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function getBrowserId(): string {
  if (typeof window === "undefined") return ""
  let id = localStorage.getItem(STORAGE_KEY_BROWSER_ID)
  if (!id) {
    id = generateId()
    localStorage.setItem(STORAGE_KEY_BROWSER_ID, id)
  }
  return id
}

function getSyntheticEmail(): string {
  const id = getBrowserId()
  return `anon-${id}@portfolio.local`
}

function getOwnedCommentIds(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY_OWNED)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function addOwnedCommentId(id: string) {
  if (typeof window === "undefined") return
  const current = getOwnedCommentIds()
  if (!current.includes(id)) {
    localStorage.setItem(STORAGE_KEY_OWNED, JSON.stringify([...current, id]))
  }
}

function removeOwnedCommentId(id: string) {
  if (typeof window === "undefined") return
  const current = getOwnedCommentIds().filter((c) => c !== id)
  localStorage.setItem(STORAGE_KEY_OWNED, JSON.stringify(current))
}

export function ProjectComments({ projectId }: ProjectCommentsProps) {
  const [open, setOpen] = useState(false)
  const [comments, setComments] = useState<Comment[]>([])
  const [count, setCount] = useState<number | null>(null)
  const [ownedIds, setOwnedIds] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [authorName, setAuthorName] = useState("")
  const [content, setContent] = useState("")

  const fetchComments = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`/api/comments?projectId=${projectId}`)
      const data = await res.json().catch(() => ({}))
      if (res.ok && data?.success) {
        const list = data.comments || []
        setComments(list)
        setCount(list.length)
      } else {
        setComments([])
        setError(data?.error || "Failed to load comments")
      }
    } catch {
      setError("Network error")
    } finally {
      setLoading(false)
    }
  }, [projectId])

  // Initial light load just to get the count
  useEffect(() => {
    let cancelled = false
    fetch(`/api/comments?projectId=${projectId}`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelled) return
        if (data?.success) setCount((data.comments || []).length)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [projectId])

  useEffect(() => {
    setOwnedIds(getOwnedCommentIds())
    const savedName = localStorage.getItem(STORAGE_KEY_AUTHOR_NAME)
    if (savedName) setAuthorName(savedName)
  }, [])

  useEffect(() => {
    if (open) {
      fetchComments()
    }
  }, [open, fetchComments])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !content.trim()) return

    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectId: String(projectId),
          authorName: authorName.trim(),
          authorEmail: getSyntheticEmail(),
          content: content.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))

      if (res.ok && data?.success && data.comment?._id) {
        localStorage.setItem(STORAGE_KEY_AUTHOR_NAME, authorName.trim())
        addOwnedCommentId(data.comment._id)
        setOwnedIds(getOwnedCommentIds())
        setContent("")
        await fetchComments()
      } else {
        setError(data?.error || "Failed to send comment")
      }
    } catch {
      setError("Network error")
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async (commentId: string) => {
    const target = comments.find((c) => c._id === commentId)
    if (!target) return
    if (!confirm("Supprimer ce commentaire ?")) return

    try {
      const res = await fetch(
        `/api/comments/${commentId}?authorEmail=${encodeURIComponent(target.authorEmail)}`,
        { method: "DELETE" }
      )
      const data = await res.json().catch(() => ({}))

      if (res.ok && data?.success) {
        removeOwnedCommentId(commentId)
        setOwnedIds(getOwnedCommentIds())
        await fetchComments()
      } else {
        setError(data?.error || "Failed to delete comment")
      }
    } catch {
      setError("Network error")
    }
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-800">
      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full flex items-center gap-3 px-4 py-2.5 bg-gray-800/60 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-full text-sm text-gray-400 hover:text-white transition-colors text-left"
          aria-label="Ouvrir les commentaires"
        >
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="flex-1">Écrire un commentaire...</span>
          {count !== null && count > 0 && (
            <span className="text-xs text-gray-500 shrink-0">
              {count} {count === 1 ? "commentaire" : "commentaires"}
            </span>
          )}
        </button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-white">
                Commentaires {count !== null ? `(${count})` : ""}
              </h4>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                Masquer
              </button>
            </div>

            {loading && <p className="text-xs text-gray-500">Chargement...</p>}

            {error && <p className="text-xs text-red-400">{error}</p>}

            {!loading && comments.length === 0 && !error && (
              <p className="text-xs text-gray-500">Sois le premier à commenter.</p>
            )}

            <div className="space-y-3">
              {comments.map((comment) => (
                <div
                  key={comment._id}
                  className="bg-gray-800/40 border border-gray-700 rounded-xl px-3 py-2"
                >
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p className="text-sm font-semibold text-white truncate">
                      {comment.authorName}
                    </p>
                    {ownedIds.includes(comment._id) && (
                      <button
                        type="button"
                        onClick={() => handleDelete(comment._id)}
                        className="text-[10px] text-red-400 hover:text-red-300 transition-colors shrink-0"
                      >
                        Supprimer
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 whitespace-pre-wrap break-words">
                    {comment.content}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {new Date(comment.createdAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-2">
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Votre nom"
                required
                className="px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
              />
              <div className="flex items-end gap-2">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSubmit(e as unknown as React.FormEvent)
                    }
                  }}
                  placeholder="Écrire un commentaire..."
                  required
                  rows={1}
                  className="flex-1 px-3 py-2 text-sm bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 resize-none"
                />
                <button
                  type="submit"
                  disabled={submitting || !authorName.trim() || !content.trim()}
                  className="px-4 py-2 bg-white hover:bg-gray-100 text-black text-sm font-medium rounded-full transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                  aria-label="Publier"
                >
                  {submitting ? "..." : "Publier"}
                </button>
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
