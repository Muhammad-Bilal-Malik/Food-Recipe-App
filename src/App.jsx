import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Index";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 text-lg">
        <Home />
      </div>
    </>
  );
}

export default App;
