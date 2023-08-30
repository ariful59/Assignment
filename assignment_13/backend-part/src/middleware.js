import {NextResponse} from "next/server";

export function middleware(req) {
    console.log("Hello from middleware");
    const reqHreader = new Headers(req.headers)
    let t = reqHreader.get('token');
    const PREFIX = 'Bearer'
    t = PREFIX+t;
    reqHreader.set('token', t);

    return NextResponse.next({request: {headers: reqHreader}})
}

export const config = {
    matcher: '/api/header-modification/:path*',
}