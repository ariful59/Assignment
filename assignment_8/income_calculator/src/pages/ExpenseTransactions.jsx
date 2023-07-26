import { useState } from "react";
import Layout from "../Layout/Layout";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ListView from "../helperComponents/ListView";

const ExpenseTransactions = () => {
    const [date, setDate] = useState(new Date());
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [flag, setFlag] = useState(false);
    const OnValueChanged = event => {
        setInputValue(event.target.value);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setFlag(true);
    }

    return (
        <Layout>
            <div>
                <form className="w-full max-w-4xl mx-auto" onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                Select Date
                            </label>
                            <div className="relative max-w-sm">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                    </svg>
                                </div>
                                <DatePicker datepicker-autohide className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select Date" selected={date} onChange={(date) => setDate(date)} />
                            </div>

                        </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Expense
                            </label>
                            <div className="relative max-w-sm">
                                <select className="select w-full max-w-xs" onChange={(event) => setSelectedValue(event.target.value)}>
                                    <option disabled selected>Expense Source</option>
                                    <option>House Rent</option>
                                    <option>Food</option>
                                    <option>Transport</option>
                                    <option>Entertainment</option>
                                    <option>Other Expense</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Amount
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="$$$" value={inputValue} onChange={OnValueChanged} />
                        </div>
                        <button className="btn btn-primary md:w-1/4 mb-6 mt-6 md:mb-0">Submit</button>
                    </div>
                </form>
                {
                    flag && <ListView dateValue = {date} expenseType = {selectedValue} inputValue = {inputValue}/>
                }
            </div>

        </Layout>
    );
};

export default ExpenseTransactions;