import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Flip to false (or delete this file) when the full site is ready to go live.
const COMING_SOON = true

const BYPASS_COOKIE = "vv_bypass"
const BYPASS_SECRET = process.env.PRESTO_BYPASS_SECRET

const STATIC_FILE = /\.(?:jpg|jpeg|png|gif|svg|ico|webp|css|js|txt|xml|woff|woff2|ttf)$/

export function proxy(request: NextRequest) {
  if (!COMING_SOON) return NextResponse.next()

  const { pathname, searchParams } = request.nextUrl

  const isExempt =
    pathname.startsWith("/presto") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    STATIC_FILE.test(pathname)

  if (isExempt) return NextResponse.next()

  // Visiting with ?bypass=<secret> sets a long-lived cookie, then redirects to
  // the clean URL (no secret left dangling in the address bar/history).
  const bypassParam = searchParams.get("bypass")
  if (BYPASS_SECRET && bypassParam === BYPASS_SECRET) {
    const cleanUrl = request.nextUrl.clone()
    cleanUrl.searchParams.delete("bypass")
    const response = NextResponse.redirect(cleanUrl)
    response.cookies.set(BYPASS_COOKIE, BYPASS_SECRET, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    })
    return response
  }

  const bypassCookie = request.cookies.get(BYPASS_COOKIE)?.value
  if (BYPASS_SECRET && bypassCookie === BYPASS_SECRET) {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL("/presto", request.url))
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
}
