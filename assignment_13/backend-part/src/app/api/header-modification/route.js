import {headers} from "next/headers";
import {NextResponse} from "next/server";

export async function GET(){
    let header = headers()
    let t = header.get('token')
    return NextResponse.json({
            "message": "Header Modification",
            "token": t
        },
        {status:200}
    )
}