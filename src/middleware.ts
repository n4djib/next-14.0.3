import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log();

  // const aaa = request.nextUrl;
  // const searchParams = aaa.searchParams.getAll("ppp");

  // console.log("\n\n--------", aaa);
  // console.log("\n\n--------", searchParams);

  // console.log("----getToken::::", JSON.stringify(token, null, 2));

  if (token && (token as any).roles.includes("admin")) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth/login", request.url));
  // return NextResponse.rewrite(new URL('/about-2', request.url))
}

export const config = {
  matcher: ["/admin/:path*"],
  // matcher: ["/dashboard", "/profile"],
};
