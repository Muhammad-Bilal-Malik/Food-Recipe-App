import "./App.css";
import { Home } from "./Pages/Home/Index";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 text-lg">
        <Home />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
