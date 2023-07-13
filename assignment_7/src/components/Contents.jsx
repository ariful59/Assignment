import { useRef, useState } from "react";

const Body = () => {
    const [value, setValue] = useState("");

    const inputRef = useRef(null);
    const handleOnClick = (event) => {
        setValue(inputRef.current.value);
    }
    return (
        <div>
            <div className="w-full max-w-xl">
                <form className="bg-white shadow-md rounded pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-4" id="username" type="text" placeholder="Add a task" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                            Add
                        </button>                    
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Body;
