import { useState } from "react";

const Body = () => {
    const [inputValue, setInputValue] = useState("");

    const handelOnChange = (event) => {

        setInputValue(event.target.value);
    }
    const handleSubmit = (event) => {
        setValue();
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center  w-full">
                <form className="bg-gray-300 mx-auto  rounded pt-10 pb-10 pl-10 pr-10 mb-4">
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-4" id="username" type="text" placeholder="Add a task" value={inputValue} onChange={handelOnChange}/>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" type="submit" onSubmit={handleSubmit}>
                            Add
                        </button>                    
                    </div>
                </form>
                <p className="bg-blue-600 text-bold text-3xl"> TODO List</p>
                <ol className="list-disc">
                   <li></li>     
                </ol>
            </div>
        </div>
    );
};

export default Body;
