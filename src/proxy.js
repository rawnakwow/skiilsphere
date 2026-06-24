import { NextResponse } from 'next/server';

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 1. STRICT BYPASS: If it belongs to Better-Auth, let Next.js handle it locally!
  if (pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // 2. FORWARDING: Route standard core data APIs to your Express/backend server
  if (pathname.startsWith('/api')) {
    const targetUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    const targetPath = pathname.replace(/^\/api/, '');
    
    return NextResponse.rewrite(new URL(targetPath, targetUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
