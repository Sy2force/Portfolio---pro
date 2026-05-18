import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import Comment from "@/lib/models/Comment"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const projectId = searchParams.get("projectId")

    if (!projectId) {
      return NextResponse.json(
        { success: false, error: "projectId is required" },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const comments = await Comment.find({ projectId: String(projectId) }).sort({
      createdAt: -1,
    })

    return NextResponse.json({ success: true, comments })
  } catch (error) {
    console.error("GET /api/comments error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch comments" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { projectId, authorName, authorEmail, content } = body

    if (!projectId || !authorName || !authorEmail || !content) {
      return NextResponse.json(
        {
          success: false,
          error: "projectId, authorName, authorEmail and content are required",
        },
        { status: 400 }
      )
    }

    await connectToDatabase()

    const created = await Comment.create({
      projectId: String(projectId),
      authorName: String(authorName).trim(),
      authorEmail: String(authorEmail).trim().toLowerCase(),
      content: String(content).trim(),
    })

    return NextResponse.json(
      { success: true, comment: created },
      { status: 201 }
    )
  } catch (error) {
    console.error("POST /api/comments error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to create comment" },
      { status: 500 }
    )
  }
}
