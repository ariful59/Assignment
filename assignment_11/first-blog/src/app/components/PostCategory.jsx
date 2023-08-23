'use client'
import {useEffect, useState} from 'react';
import axios from "axios";
import Link from "next/link";
import {usePathname} from "next/navigation";
import ProgressBar from "@/app/components/ProgressBar";
const PostCategory = () => {
    let currentPath = usePathname();
    const [value, setValue] = useState([]);
    useEffect(() => {
        (async () => {
            await axios.get('https://basic-blog.teamrabbil.com/api/post-categories')
                .then(res => {
                    setValue(res.data);
                })
        })()
    }, []);
    <ProgressBar/>
    return (
        <div className={"relative top-0 z-1"}>
            <div className="flex flex-col bg-gradient-to-r from-cyan-100 to-blue-100">
                <ul className="menu menu-horizontal text-xl mx-auto shadow-md">
                    {
                        value.map((item, index)=>{
                            return (
                            <li>
                                <Link key={index}  href={`/blog/${item['id']}`} className={"hover:text-cyan-300 hover:underline"}>{item['name']}</Link>
                            </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default PostCategory;