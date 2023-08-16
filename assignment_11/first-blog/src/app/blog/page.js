'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function BlogPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            await axios.get('data/blogData.json')
                .then(res => {
                    setData(res.data['data']);
                })
        })()
    }, []);
    return (
        <div className="flex flex-row mx-w-sm justify-center item-center bg-white">
            <ul className="menu w-64 p-0 [&_li>*]:rounded-none">
                {
                    data.map((item, index) => {
                        return <Link className="hover:bg-blue-600 pl-5 pt-5 pb-5 pr-5 mx-auto bg-gray-300 text-bold text-2xl mt-6 shadow mb-6" href={"/blog/"+index.toString()}>{item['title']}</Link>

                    })
                }
            </ul>
        </div>
    );
}

