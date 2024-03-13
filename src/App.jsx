import "./App.css";
import TodoList from "./TodoList.jsx";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"> My todos </Typography>
        </Toolbar>
      </AppBar>
      <TodoList />
    </>
  );
}

export default App;