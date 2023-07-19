const Item = ({item, remove, toggleItem}) => {

    return (
        <div>
            <li>
                <div className="flex items-center mt-1 bg-slate-200">
                    <input type="checkbox" value="" onChange={()=>toggleItem(item.id)} className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="ml-4 text-xl font-medium text-gray-900 dark:text-gray-300">{item.value}</label>
                    <button type="button" onClick={()=>remove(item.id)} className="mx-auto mt-2 focus:outline-none text-white bg-white-500 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">❌</button>
                </div>
            </li>
        </div>
    );
};

export default Item;