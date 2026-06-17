import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const protectedRoutes = ["/courses", "/my-profile", "/update-profile"];
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isLoggedIn = request.cookies.get("user")?.value;
  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/courses/:path*", "/my-profile/:path*", "/update-profile/:path*"],
};