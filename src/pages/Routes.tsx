import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import ToDoList from './ToDoList';
import Login from './Login';

function MainRoutes() {
  return (
          <Routes>
            <Route path="/"  element={<Navigate to="/Login" replace={true} />} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ToDoList" element={<ToDoList/>}/>
          </Routes>
  );
}

export default MainRoutes;
