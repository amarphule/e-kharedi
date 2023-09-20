import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
import { Link } from "react-router-dom";
const Header = () => {
  const [categories, setcategories] = useState(["All"]);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart?.cartItems?.length);

  const fetchCategory = async () => {
    let data = await fetch("https://fakestoreapi.com/products/categories");
    let categories = await data.json();
    setcategories(["All", ...categories]);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  const handleCategory = (cat) => {
    dispatch(fetchProducts(cat));
  };

  return (
    <div className="flex w-full h-24 justify-between items-center px-20 bg-indigo-100 shadow-sm shadow-indigo-300 sticky top-0 z-10">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="E-kharedi"
            className="w-24 hover:bg-indigo-300 hover:rounded-xl"
          />
        </Link>
        <span className="text-indigo-800 text-2xl font-bold italic">
          E-KHAREDI
        </span>
      </div>

      <ul className="flex w-2/5 justify-around">
        {categories.map((category, i) => (
          <li
            key={i}
            className="font-semibold capitalize hover:font-bold hover:text-indigo-700 cursor-pointer"
            onClick={() => handleCategory(category)}
          >
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      <div className="flex">
        <Link to="/cart">
          <button className="relative">
            <span className="absolute -mt-5 text-red-600 font-semibold">
              {cartItems > 0 && cartItems}
            </span>
            <FaCartPlus size="25px" />
          </button>
        </Link>

        <div className="ml-5">Login</div>
      </div>
    </div>
  );
};

export default Header;
