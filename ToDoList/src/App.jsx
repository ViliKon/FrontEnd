import "./App.css";

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to={"/"}> HOME </Link>
      
        <Link to={"/Todo"}> TODOS </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;