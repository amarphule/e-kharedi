import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { fetchCategory, fetchProducts } from "../../slices/productsSlice";
import { logout } from "../../slices/UserSlice";
import logo from "../../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart?.cartItems?.length);
  const { userToken } = useSelector((store) => store.user);
  const { categories } = useSelector((store) => store.products);
  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const handleCategory = (cat) => {
    dispatch(fetchProducts(cat));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.info("Logged out successfully.", { autoClose: 1000 });
  };

  return (
    <>
      <nav className="bg-indigo-100 dark:bg-slate-900">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center p-4 mx-auto sticky top-0 z-10">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="E-kharedi"
              className="h-9 mr-2 w-16 p-1 hover:bg-indigo-300 hover:rounded-xl"
            />
            <span className="text-indigo-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              E-KHAREDI
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden={isOpen}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {categories.map((category, i) => (
                <li
                  key={i}
                  className="block font-semibold capitalize hover:font-bold hover:text-indigo-700 cursor-pointer"
                  onClick={() => handleCategory(category)}
                >
                  <Link to={`/category/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex md:p-4 ">
            <Link to="/cart">
              <button className="relative">
                <span className="absolute -mt-5 text-red-600 font-semibold">
                  {cartItems > 0 && cartItems}
                </span>
                <FaCartPlus size="25px" />
              </button>
            </Link>

            <div className="ml-5">
              {userToken ? (
                <Link
                  onClick={handleLogout}
                  className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-full mt-4"
                >
                  logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-full mt-4"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
