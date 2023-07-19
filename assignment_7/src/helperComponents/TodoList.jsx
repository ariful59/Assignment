import Item from './Item'

const TodoList = ({ todoItems, update }) => {
    function removeItems(index) {
        update(todoItems.filter((item) => item.id != index));
    }
    function OnToggleItem(index) {
        update(todoItems.map((item) => item.id === index ? { ...item, checked: !item.checked } : item))
    }
    return (
        <div className="bg-gray-400 max-w-sm mx-auto mt-2 flex flex-col shadow">
            <p className=" text-bold text-3xl text-center"> TODO List</p>
            <ul>
                {
                    todoItems.map((item, index) => (
                        <Item item={item} key={index} remove={removeItems} toggleItem={OnToggleItem} />
                    ))
                }
            </ul>
        </div>
    );
};

export default TodoList;