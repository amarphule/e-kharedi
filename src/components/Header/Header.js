import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
const Header = () => {
  const [categories, setcategories] = useState(["All"]);
  const dispatch = useDispatch();
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
    <div className="flex w-full h-24 justify-between items-center px-20 bg-indigo-100 shadow-sm shadow-indigo-300">
      <div className="flex items-center">
        <img src={logo} alt="E-kharedi" className="w-24" />
        <span className="text-indigo-800 text-2xl font-bold italic">
          E-KHAREDI
        </span>
      </div>

      <ul className="flex w-2/5 justify-around">
        {categories.map((category, i) => (
          <li
            key={i}
            className="font-semibold capitalize hover:font-bold"
            onClick={() => handleCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="flex">
        <button>
          <FaCartPlus size="30px" />
        </button>

        <div className="ml-5">Login</div>
      </div>
    </div>
  );
};

export default Header;
