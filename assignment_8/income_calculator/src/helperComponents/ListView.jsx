const ListView = ({ dateValue, expenseType, inputValue}) => {
    return (
        <div>
            <div>

                <h2 className="max-w-4xl mb-2 text-lg font-semibold text-gray-900 dark:text-white">Expense Items List:</h2>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                <li><span className="font-semibold text-gray-900 dark:text-white">{dateValue}</span></li>
                    <li>
                        <span className="font-semibold text-gray-900 dark:text-white">{expenseType}</span>
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900 dark:text-white">{inputValue}</span>
                    </li>
                </ol>

            </div>
        </div>
    );
};

export default ListView;