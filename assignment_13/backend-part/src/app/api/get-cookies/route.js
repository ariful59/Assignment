import {NextResponse} from "next/server";

export async function GET(req, res){
    //console.log("hello world");
    let theme = req.cookies.get('theme');
    let language = req.cookies.get('language');
    return NextResponse.json({
            data: [theme, language]
        },
        {status:200}
    )
}