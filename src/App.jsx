import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Index";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 text-lg">
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
