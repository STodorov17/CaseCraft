import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // добавяме CORS за всяка заявка (GET/POST/OPTIONS)
  res.headers.set("Access-Control-Allow-Origin", "*")
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.headers.set("Access-Control-Allow-Headers", "*")

  // ако е preflight → връщаме празен 204
  if (req.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: res.headers,
    })
  }

  return res
}

export const config = {
  matcher: ["/:path*"], // важи за всички пътища
}
