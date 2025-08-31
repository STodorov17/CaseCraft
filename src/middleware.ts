import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  // Отговаря на всички OPTIONS, за да няма 400
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "*",
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/:path*"], // важи за всички пътища (вкл. /, /api/auth/logout и т.н.)
}
