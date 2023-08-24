'use client'

import {useEffect, useState} from "react";
import {getPostList} from "@/app/components/API";
import Link from "next/link";
import CartView from "@/app/components/cartView";
import ProgressBar from "@/app/components/ProgressBar";

export default function Page({params}) {
    const [value, setValue] = useState(null);
    const id = params['post-list'];
    useEffect(() => {
        (async () => {
            let temp = await getPostList(id);
            setValue(temp);
        })()
    }, []);
    return (
        <div>
            {
                value === null && <ProgressBar/>
            }
            <div className={"bg-gradient-to-r from-cyan-100 to-blue-100"}>
                <div className="flex lg:flex-wrap flex flex-wrap-reverse mx-auto pt-5 pb-5 mx-w-sm justify-center item-center">
                    {
                        value && value.map((item, index) => {
                            return (
                                <Link key={index}  href={`/blog/${item['id']}`}><CartView value={item}/></Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}