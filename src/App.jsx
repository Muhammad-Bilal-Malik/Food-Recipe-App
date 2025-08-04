import "./App.css";
import UserProvider from "./Context/ContextApi";
import { Home } from "./Pages/Home/Index";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-600 text-lg">
        <UserProvider>
          <Home />
          <ToastContainer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
