import {useState } from "react";
import Form from './../helperComponents/Form.jsx'
import TodoList from './../helperComponents/TodoList.jsx'
import CompletedList from './../helperComponents/CompletedList.jsx'

const Body = () => {
    const [todoList, setTodoValue] = useState([]);

    function addItems(inputValue) {
        setTodoValue((t) => [...t, inputValue]);
    }
    // function removeItems(inputValue){
    //     setTodoValue(inputValue);
    // }
    // function toggleItems(inputValue){
    //     setTodoValue(inputValue);
    // }
    
    function updateItems(t){
        console.log("Update");
        setTodoValue(t);
    }

    return (
        <div>
            <Form addItem={addItems}/>
            <TodoList todoItems={todoList} update={updateItems}/>
            <CompletedList />
        </div>
    );
};

export default Body;
