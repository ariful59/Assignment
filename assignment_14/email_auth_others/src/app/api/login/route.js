import {jwtVerify, SignJWT} from "jose";
import {NextResponse} from "next/server";
import nodemailer from "nodemailer";
export async function POST(req, res) {
        const jb = await req.json();
        let el = jb['email']
        let pwd = jb['password']

        //email sending
        //transporter creation
        let transporter = nodemailer.createTransport(
            { "host": 'mail.teamrabbil.com',
                "port": 25,
                "secure": false,
                "auth": {"user": "info@teamrabbil.com", "pass": '~sR4[bhaC[Qs'},
                "tls": {"rejectUnauthorized": false}
            });

        //body and mail option creation
        let mailOption = {
            from:'Md Ariful Amin <info@teamrabbil.com>',
            to: el,
            subject: "Demo Test Email",
            body: "Test email Body"
        }
        //send email

        let result = await transporter.sendMail(mailOption)
        if(result){
            console.log("email Sent Successfully")
        } else {
            console.log("email sending failed")
        }
        //token
        let pl = {email: el, password: pwd}
        const k = new TextEncoder().encode("ABCD-XYZ-123")
        let t = await new SignJWT({email: pl})
            .setProtectedHeader({alg: 'HS256'})
            .setIssuedAt()
            .setIssuer('http://localhost:3000')
            .setExpirationTime('2h')
            .sign(k)

        return NextResponse.json({msg: "token generation successful"}, {
                status: 200,
                headers: {'Set-Cookie': `token=${t}; Path=/; Expires=Fri, 21-Sep-2023 12:00:00 GMT`}
            }
        )
}

// async function tokenVerification(){
//     export async function VerifyToken (token) {
//         //key can be add to .env file
//         const secret = new TextEncoder().encode("ABCD-XYZ-123");
//         const decoded= await jwtVerify(token, secret)
//         return decoded ['payload']
//     }
// }
