const ListView = ({ cartItem , remove}) => {
    return (
        <div>
            <li>
                <div className="w-full md:max-w-md mb-2 mt-10 mx-auto">
                    <div className="flex flex-wrap mx-3 mb-2">
                        <div className="w-1/4 mb-6 md:mb-0">
                            <div className="relative w-full md:max-w-sm ">
                                {cartItem?.date}
                            </div>
                        </div>
                        <div className="w-1/4 mb-6 md:mb-0">
                            <div className="relative w-full md:max-w-sm">
                                {cartItem?.type}
                            </div>
                        </div>
                        <div className="w-1/4 mb-6 md:mb-0">
                            {cartItem?.value}
                        </div>
                        <button type="button" onClick={()=>remove(cartItem?.id)} className="item-center justify-center focus:outline-none text-white bg-white-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">❌</button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default ListView;