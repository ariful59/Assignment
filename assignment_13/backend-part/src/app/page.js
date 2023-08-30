'use client'
import axios from "axios";
import Link from "next/link";
const Page = () => {
    const URL =  "http://localhost:3000/api/"
    async function setData(){
        let extention = 'cookies'
        let res = await axios.get(URL+extention)
        if(res.status === 200){
            return alert("Success!!!")
        } else {
            return alert("Fail!!")
        }
    }
    return (
        <div>

            <div className="items-center justify-center mx-auto flex flex-col">
                <button onClick={setData} className="btn btn-primary mt-10">Set Cookies</button>
                <Link className="btn btn-secondary mt-10" href={'/display'}> Get Cookies</Link>

            </div>
        </div>
    );
};

export default Page;