import { Route, Routes, Navigate } from "react-router-dom"

import CreateLogin from './CreateLogin'
import ToDoList from './ToDoList';
import Login from './Login';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Login" replace={true} />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ToDoList/" element={<ToDoList />} />
      <Route path="/CreateUser" element={<CreateLogin/>}/>
    </Routes>
  );
}

export default MainRoutes;
