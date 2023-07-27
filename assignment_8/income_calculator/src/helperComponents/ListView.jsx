const ListView = ({ dateValue, expenseType, inputValue }) => {

    return (
        <div>
            <div className="w-full md:max-w-md mb-2 mt-10 mx-auto">
                <div className="bg-blue-400 ">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Items List:</h2>
                </div>
                <div>
                    <div className="flex flex-wrap mx-3 mb-2">
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Select Date
                            </label>
                            <div className="relative w-full md:max-w-sm ">
                                Hello world
                            </div>

                        </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Type
                            </label>
                            <div className="relative w-full md:max-w-sm">
                                {expenseType}
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Amount
                            </label>
                            {inputValue}
                        </div>
                        <button className="btn btn-primary md:w-1/4 w-full mb-6 mt-6 md:mb-0">Delete</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListView;