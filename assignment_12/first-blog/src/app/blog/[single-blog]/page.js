'use client'

import {useEffect, useState} from "react";
import {getPostDetails} from "@/app/components/API";
import PostDetails from "@/app/components/postDetails";
import ProgressBar from "@/app/components/ProgressBar";

export default function Page({params}) {
    const [value, setValue] = useState(null);
    const id = params['single-blog'];
    useEffect(() => {
        (async () => {
            let temp = await getPostDetails(id);
            setValue(temp);
        })()
    }, []);
    return (
        <div>
        {
            value === null ? <ProgressBar/> : <PostDetails value={value}/>
        }
        </div>
    );
}