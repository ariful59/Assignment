import {NextResponse} from "next/server";

export async function GET(req, res){
    return NextResponse.json({ message: "cookie setting done"},
        {status: 200,
            headers: {'Set-Cookie': [`theme=dark; Path=/; Expires=Fri, 1-Sep-2023 12:00:00 GMT`, 'language=en;Path=/;Expires=Wed, 30-Aug-2023 16:00:00 GMT']}}
        )
}