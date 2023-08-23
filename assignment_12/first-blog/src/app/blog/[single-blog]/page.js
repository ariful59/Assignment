'use client'

import {useEffect, useState} from "react";
import axios from "axios";
import CartView from "@/app/components/cartView";

export default function Page({ params }) {
    const [value, setValue] = useState(null);
    useEffect(() => {
        (async () => {
            await axios.get('/data/blogData.json')
                .then(res => {
                    const t = res.data['data'];
                    const d = t.find((item)=>item['id']===params['single-blog']);
                    setValue(d);
                })
        })()
    }, []);

    return (
        <div>
            {
                value && <CartView value = {value}/>
            }
        </div>
    );
}