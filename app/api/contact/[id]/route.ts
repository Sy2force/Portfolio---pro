import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import ContactMessage from "@/lib/models/ContactMessage"

const ALLOWED_STATUS = ["nouveau", "lu", "archive"]

function isAdminAuthorized(request: NextRequest): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return false

  const authHeader = request.headers.get("authorization") || ""
  const expected = `Bearer ${adminPassword}`
  return authHeader === expected
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { status } = body

    if (!ALLOWED_STATUS.includes(status)) {
      return NextResponse.json(
        { success: false, error: "Invalid status" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const updated = await ContactMessage.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    )

    if (!updated) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true, message: updated })
  } catch (error) {
    console.error("PATCH /api/contact/[id] error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to update message" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!isAdminAuthorized(request)) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      )
    }

    await connectToDatabase()

    const deleted = await ContactMessage.findByIdAndDelete(params.id)

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Message not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE /api/contact/[id] error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to delete message" },
      { status: 500 }
    )
  }
}
