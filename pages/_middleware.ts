import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect("/coordinates");
  }
  return NextResponse.next();
}
