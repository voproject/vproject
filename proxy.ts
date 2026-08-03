import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Flip to false (or delete this file) when the full site is ready to go live.
const COMING_SOON = true

const STATIC_FILE = /\.(?:jpg|jpeg|png|gif|svg|ico|webp|css|js|txt|xml|woff|woff2|ttf)$/

export function proxy(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next()

  const { pathname } = request.nextUrl

  const isExempt =
    pathname.startsWith("/presto") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    STATIC_FILE.test(pathname)

  if (isExempt) return NextResponse.next()

  return NextResponse.rewrite(new URL("/presto", request.url))
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
