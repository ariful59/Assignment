import {SignJWT} from "jose";
import {NextResponse} from "next/server";

export async function POST(req, res){
    const jb = await req.json();
    let el = jb['email']
    let pwd = jb['pass']

    let pl = {email: el, password:pwd}
    const k = new TextEncoder().encode("ABCD-XYZ-123")
    let t = await new SignJWT({email:pl})
        .setProtectedHeader({ alg: 'HS256'})
        .setIssuedAt()
        .setIssuer('http://localhost:3000')
        .setExpirationTime('2h')
        .sign(k)

    return NextResponse.json({msg:"token generation successful", token:t}, {status:200})
}