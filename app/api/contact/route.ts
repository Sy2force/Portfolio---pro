import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import ContactMessage from "@/lib/models/ContactMessage"

const ALLOWED_TYPES = ["recruteur", "startup", "partenariat", "autre"]

function isAdminAuthorized(request: NextRequest): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const authHeader = request.headers.get("authorization") || ""
  const expected = `Bearer ${adminPassword}`
  return authHeader === expected
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, type, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email and message are required" },
        { status: 400 }
      )
    }

    const safeType = ALLOWED_TYPES.includes(type) ? type : "autre"

    await connectToDatabase()

    const created = await ContactMessage.create({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      company: company ? String(company).trim() : "",
      type: safeType,
      subject: subject ? String(subject).trim() : "",
      message: String(message).trim(),
      status: "nouveau",
    })

    return NextResponse.json(
      { success: true, message: created },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST /api/contact error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    await connectToDatabase()

    const { searchParams } = new URL(request.url)
    const typeFilter = searchParams.get("type")

    const query: Record<string, unknown> = {}
    if (typeFilter && ALLOWED_TYPES.includes(typeFilter)) {
      query.type = typeFilter
    }

    const messages = await ContactMessage.find(query).sort({ createdAt: -1 })

    return NextResponse.json({ success: true, messages })
  } catch (error) {
    console.error("GET /api/contact error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 }
    )
  }
}
