import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Outlet />
    </div>
  );
}

export default App;
