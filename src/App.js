import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TicTacToe from "./Components/TicTacToe/TicTacToe";
import ToDo from "./Components/ToDo/ToDo";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/assignment" element={<ToDo />} />
      <Route path="/tick-tac-toe/assignment" element={<TicTacToe />} />
    </Routes>
  );
};

export default App;
