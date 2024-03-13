import { useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function TodoList() {
    const [todo, setTodo] = useState({ desc: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);
    const [columnDefs, setColumnDefs] = useState([
        { field: 'desc' },
        { field: 'priority' },
        { field: 'date' }
    ]);
    const gridRef = useRef()


    const [colDef] = useState([
        { field: 'desc', sortable: true, filter: true },
        {
            field: 'priority', sortable: true, filter: true,
            cellStyle: params => params.value === 'High' ? { color: 'red' } : { color: 'black' }
        },
        { field: 'date', sortable: true, filter: true }
    ]);

    const addTodo = () => {
        if (todo.desc === "" || todo.date === "" || todo.priority === "") {
            alert("Fill all values!")
        }
        else {
            setTodos([...todos, { ...todo, id: todos.length }]);
            setTodo({ desc: "", date: "", priority: "" });
        }
    };

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, index) =>
                index != gridRef.current.getSelectedNodes()[0].id))
        }
        else {
            alert('Select a row first!');
        }
    };

    const changeDate = () => {

    }

    return (
        <>

            <Stack direction="row" spacing={2} mt={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    onChange={e => setTodo({ ...todo, desc: e.target.value })}
                    value={todo.desc} />
                <TextField
                    label="Priority"
                    onChange={e => setTodo({ ...todo, priority: e.target.value })}
                    value={todo.priority} />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        onChange={date => setTodo({...todo, date: date})}
                        value={todo.date} 
                        format="DD/MM/YYYY"
                        />
                </LocalizationProvider>
                <Button variant="contained" onClick={addTodo}>Add</Button>
                <Button variant="contained" onClick={deleteTodo}>Delete</Button>
            </Stack>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={colDef}
                    rowSelection="single"
                />
            </div>
        </>
    );
}

export default TodoList;