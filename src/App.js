import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import SearchProduct from "./components/Search/SearchProduct";

function App() {
  return (
    <div>
      <Header />
      {/* <SearchProduct /> */}
      <Outlet />
    </div>
  );
}

export default App;
