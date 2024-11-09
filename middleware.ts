import { NextRequest, NextResponse } from "next/server";

// 代理/api/开头的请求
export function middleware(request: NextRequest) {
  // 需要把请求拼接的代理字段去掉，否則会出现在实际请求里面
  return NextResponse.rewrite(
    new URL(
      `${process.env.NEXT_PUBLIC_CONFIG_URL}${request.nextUrl.pathname.replace(
        process.env.NEXT_PUBLIC_PROXY!,
        ""
      )}${request.nextUrl.search}`
    ),
    { request }
  );
}

export const config = {
  matcher: ["/api/:path*"],
};
