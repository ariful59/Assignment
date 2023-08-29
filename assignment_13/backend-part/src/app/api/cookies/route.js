import {NextResponse} from "next/server";

export async function GET(){
    return NextResponse.json({ message: "I am Get function"}, {status: 200})
}