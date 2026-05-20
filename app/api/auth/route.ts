import { NextRequest, NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json(
        { success: false, error: "ADMIN_PASSWORD not configured" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { password } = body

    if (typeof password !== "string" || password.length === 0) {
      return NextResponse.json(
        { success: false, error: "Password required" },
        { status: 400 }
      )
    }

    if (password === adminPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, error: "Invalid password" },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Authentication failed" },
      { status: 500 }
    )
  }
}
