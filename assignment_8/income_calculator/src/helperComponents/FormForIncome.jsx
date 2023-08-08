import { useState } from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
const FormForIncome = ({ addToItem, type, dropDownMenu }) => {
    const [date, setDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');


    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '' || selectedValue === '') {
            alert('Please select Income type or amount');
            return;
        }
        let dateString = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();
        const temp = { date: dateString, type: selectedValue, value: inputValue, id: Date.now() };
        addToItem(temp);
    }
    return (
        <div>
            <form className="w-full max-w-4xl mx-auto" onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap mx-3 mb-2">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Select Date
                        </label>
                        <div className="relative w-full md:max-w-sm ">
                            <DatePicker datepicker-autohide className="w-full md:max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Date" selected={date} onChange={(date) => setDate(date)} />
                        </div>

                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            {type}
                        </label>
                        <div className="relative w-full md:max-w-sm">
                            <select className="select w-full md:max-w-xs" onChange={(event) => setSelectedValue(event.target.value)}>
                                {
                                    dropDownMenu?.map((menu) => {
                                        console.log("hello from menu: " + menu);
                                        <option >hello</option>
                                        // if(index === 0){
                                        //     {<option disabled selected>{menu}</option>}
                                        // } else {

                                        // }
                                    })
                                }

                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Amount
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="$$$" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                    </div>
                    <button className="btn btn-primary md:w-1/4 w-full mb-6 mt-6 md:mb-0">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormForIncome;