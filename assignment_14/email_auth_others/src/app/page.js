'use client'
import {useRouter} from "next/navigation";
import { useCookies } from 'next-client-cookies';

export default function Home() {
    const router = useRouter()
    const cookies = useCookies();
    const cookie = cookies.get('token')
  return (
    <div>
        {
            cookie ? router.push('/dashboard') : router.push('/login')
        }
    </div>
  )
}
