// Import useState from react
import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
    // Declare states
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChangeDesc = (event) => {
        setDesc(event.target.value);
    };

    const handleChangeDate = (event) => {
        setDate(event.target.value);
    };

    // Remember to call preventDefault() if using form
    const addTodo = () => {
        if (desc === "" || date === "") {
            alert("Fill all values!")
        }
        else {
            setTodos([...todos, {description: desc, date: date}]);
            setDesc("");
            setDate("");
        }
    };
    
    return (
        <>
            <p>Descreption:<input type="text" onChange={handleChangeDesc} value={desc} />
            Date:<input type="text" onChange={handleChangeDate} value={date} /><button onClick={addTodo}>Add</button></p>
    

            <TodoTable todos={todos} setTodos={setTodos}/>
        </>
    );
}

export default TodoList;



