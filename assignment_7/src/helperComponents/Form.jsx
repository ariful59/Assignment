import { useState } from "react";
const Form = ({addItem}) => {
    const [inputValue, setInputValue] = useState("");

    const handelOnChange = (event) => {
        setInputValue(event.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const t = { value: inputValue, id: Date.now(), checked: false };
        addItem(t);
        setInputValue('');
    }
    return (
        <div className="flex flex-col max-w-sm mx-auto bg-gray-300">
            <form className=" mx-auto  rounded pt-10 pb-10 pl-10 pr-10" onSubmit={handleOnSubmit}>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mx-auto" id="username" type="text" placeholder="Add a task" value={inputValue} onChange={handelOnChange} />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" type="submit">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;