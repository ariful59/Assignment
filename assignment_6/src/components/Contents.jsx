import { useRef, useState } from "react";

const Body = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
    const handleOnClick = (event) => {
        setValue(inputRef.current.value);        
    }
    return (
        <div className="mt-10 mb-10 flex flex-col items-center justify-center">
            <textarea className="textareatextarea-primary textarea-bordered textarea-md w-full max-w-xs" placeholder="Enter your Text" ref={inputRef}>
            </textarea>
            <button type="button" onClick={handleOnClick} className=" bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-10 mb-5 rounded-full">
                Click Me
            </button>
            { (<p className="border-solid text-center mt-10 border-spacing-4">
                   {value}
                </p>)
            }
        </div>
    );
};

export default Body;
