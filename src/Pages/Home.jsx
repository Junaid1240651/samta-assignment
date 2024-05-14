import React from "react";
import { useNavigate } from "react-router-dom";
import PlayerName from "../Components/TicTacToe/playerName";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex bg gap-5 h-[100vh] w-[100%] items-center justify-center">
      <button
        onClick={() => navigate("/todo/assignment")}
        className="bg-blue-600 text-white py-2 px-4 rounded-md  "
      >
        To Do{" "}
      </button>
      <button
        onClick={() => navigate("/tick-tac-toe/assignment")}
        className="bg-blue-600 text-white py-2 px-4 rounded-md  "
      >
        Tick Tack Toe{" "}
      </button>
    </div>
  );
};

export default Home;
