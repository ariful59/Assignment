'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import getData, {getNewestPost} from "@/app/components/API";
import CartView from "@/app/components/cartView";
import ProgressBar from "@/app/components/ProgressBar";

export default function BlogPage() {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            let temp = await getNewestPost();
            setData(temp);
        })()
    }, []);

    return (
        <div className={"bg-gradient-to-r from-cyan-100 to-blue-100"}>
            <div className="flex lg:flex-wrap flex flex-wrap-reverse mx-auto pt-5 pb-5 mx-w-sm justify-center item-center">
                {
                    data === null ? <ProgressBar/> : data.map((item, index) => {
                        return (
                            <Link key={index}  href={`/blog/${item['id']}`}><CartView value={item}/></Link>
                        )
                    })
                }
            </div>
        </div>
    );
}