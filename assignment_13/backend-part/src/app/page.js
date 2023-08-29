'use client'
import axios from "axios";
const Page = () => {
    const URL =  "http://localhost:3000/api/cookies"
    async function setData(){
        let res = await axios.get(URL)
        if(res.status === 200){
            console.log(res.data['message']);
            return res.data;
        } else {
            return [];
        }
    }
    return (
        <div>
            <div className="items-center justify-center mx-auto flex flex-grow">
                <button onClick={setData} className="btn btn-primary">Set Cookies</button>
            </div>
        </div>
    );
};

export default Page;