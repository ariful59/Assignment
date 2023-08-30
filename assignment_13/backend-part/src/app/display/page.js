'use client'
import axios from "axios";
import {useEffect, useState} from "react";

const Page = () => {
    const URL =  "http://localhost:3000/api/get-cookies"
    const [theme, setTheme] = useState(null);
    const [language, setLang] = useState(null);
    useEffect(()=>{
            (async ()=>{
                let res = await axios.get(URL)
                if(res.status === 200){
                    setTheme(res.data['data'][0]);
                    setLang(res.data['data'][1]);
                    return res.data;
                } else {
                    return [];
                }
            })()
        }
    ,[])
    return (
        <div>

            { theme==null && language==null ? <h1 className="text-5xl flex flex-auto items-center justify-center mx-auto">No Data Found</h1>: "" }
            <h1 className="text-5xl flex flex-auto items-center justify-center mx-auto">Display Board of Cookies</h1>
            <ol className="text-xl mx-auto mt-10">

                    <li>
                        <h1 className="text-2xl">
                            {theme && theme['name']} :: {theme && theme['value']}
                        </h1>
                    </li>

                <li>
                    <h1 className="text-2xl">
                        {language && language['name']} :: {language && language['value']}
                    </h1>
                </li>
            </ol>

        </div>
    );
};

export default Page;