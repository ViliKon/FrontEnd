import React from "react";

function TodoTable(props) {

    const deleteTodo = (index) => {
        props.setTodos(props.todos.filter((_, i) => i !== index));
    }

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {props.todos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteTodo(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoTable;