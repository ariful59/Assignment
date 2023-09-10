'use client'
import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/navigation";

const Page = () => {
    const [value, setValue] = useState({});
    const router = useRouter()
    const handleOnChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setValue(values =>({...values, [name]: value}))
    }
    const handleOnSubmit= (e)=>{
        e.preventDefault();
        var validRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!(value['email'].match(validRegex))) {
            alert("Please enter valid email");
        } else {
            const URL = 'http://localhost:3000/api/login';
            axios.post(URL, {
                email: value['eamil'],
                password: value['password']
            }).then((res) => {
                router.push('/dashboard')
            }).catch((e)=>{
                console.log("error occurred "+e);
            });
        }
    }
    return (
        <div className="bg-gradient-to-r from-cyan-100 to-blue-100 min-h-screen">
            <div className="flex flex-col mx-auto justify-center items-center">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 w-full min-h-max max-w-screen-md" onSubmit={handleOnSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="email" onChange={handleOnChange} value={value.username}/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  name="password" placeholder="******************" onChange={handleOnChange} value={value.username}/>
                            <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;