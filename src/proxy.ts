import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "de"] as const;

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (!locales.includes(first as any)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|opengraph-image|twitter-image|api|favicon.ico|public).*)"],
};
