'use client'
import React from 'react';
import PageUpperLayout from "@/app/components/pageUpperLayout";
import {useRouter} from "next/navigation";
import {useCookies} from "next-client-cookies";


const Page = () => {
    const router = useRouter()
    const cookies = useCookies();
    const cookie = cookies.get('token')
    return (
        <div>
            {
                cookie ? <PageUpperLayout/> : router.push('/login')
            }
        </div>
    );
};

export default Page;