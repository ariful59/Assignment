const ListViewheader = ({ type }) => {
    return (
        <div>
            <div className="w-full md:max-w-md mb-2 mt-10 mx-auto">
                <div className="bg-blue-400 px-auto mb-6">
                    <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white">{type} Items List:</h2>
                </div>
                <div>
                    <div className="flex flex-wrap mx-3 mb-2">
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Date
                            </label>

                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                                {type} Type
                            </label>
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Amount
                            </label>
                        </div>
                        <div className="w-1/4 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Action
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListViewheader;