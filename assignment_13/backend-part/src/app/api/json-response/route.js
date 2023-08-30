import {NextResponse} from "next/server";
import {headers} from "next/headers";

export async function GET(){
    return NextResponse.json({
            "message": "Welcome to our API!",
            "version": "1.0"
        },
        {status:200}
    )
}