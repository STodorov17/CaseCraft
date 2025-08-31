import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Само за API route-и
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const response = NextResponse.next()

    response.headers.set("Access-Control-Allow-Origin", "https://case-craft-two.vercel.app")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, Next-Router-Prefetch, Next-Router-State-Tree, Next-Url, RSC")

    return response
  }

  return NextResponse.next()
}

// Кажи на Next за кои route-и важи
export const config = {
  matcher: ["/api/:path*"],
}
