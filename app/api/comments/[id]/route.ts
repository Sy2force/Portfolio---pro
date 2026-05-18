import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import Comment from "@/lib/models/Comment"

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { searchParams } = new URL(request.url)
    const authorEmail = searchParams.get("authorEmail")

    if (!authorEmail) {
      return NextResponse.json(
        { success: false, error: "authorEmail is required" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const comment = await Comment.findById(params.id)

    if (!comment) {
      return NextResponse.json(
        { success: false, error: "Comment not found" },
        { status: 404 }
      )
    }

    if (comment.authorEmail !== authorEmail.toLowerCase()) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 403 }
      )
    }

    await Comment.findByIdAndDelete(params.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("DELETE /api/comments/[id] error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to delete comment" },
      { status: 500 }
    )
  }
}
