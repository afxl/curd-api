import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './home';
import Update from './pages/update';
import Read from './pages/studentList';
import Add from './pages/add';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Read />}></Route>
          <Route path="update" element={<Update />}></Route>
          <Route path="add" element={<Add />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
