import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware simplificado sem Clerk (autenticação desabilitada temporariamente)
export function middleware(request: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};