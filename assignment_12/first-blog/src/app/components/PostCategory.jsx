'use client'
import {useEffect, useState} from 'react';
import Link from "next/link";
import {getPostCategories} from "@/app/components/API";
import ProgressBar from "@/app/components/ProgressBar";
const PostCategory = () => {
    const [value, setValue] = useState(null);
    useEffect(()=>{
        (async ()=>{
            let temp = await getPostCategories();
            setValue(temp);
        })()
    }, []);
    return (
        value === null ? <ProgressBar/> :
        <div className={"relative top-0 z-1"}>
            <div className="lg:flex lg:flex-col bg-gradient-to-r from-cyan-100 to-blue-100">
                <ul className="menu menu-horizontal text-xl mx-auto shadow-md">
                    {
                        value.map((item, index) => {
                            return (
                                <li>
                                    <Link key={index} href={`/post/${item['id']}`}
                                          className={"hover:text-cyan-300 hover:underline"}>{item['name']}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default PostCategory;