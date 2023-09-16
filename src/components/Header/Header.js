import logo from "../../assets/logo.svg";
import { FaCartPlus } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex w-full h-24 justify-between items-center px-20 bg-indigo-100 shadow-sm shadow-indigo-300">
      <div className="flex items-center">
        <img src={logo} alt="E-kharedi" className="w-24" />
        <span className="text-indigo-800 text-2xl font-bold italic">
          E-KHAREDI
        </span>
      </div>

      <ul className="flex w-1/3 justify-around">
        <li>
          <a href="/men">Men</a>
        </li>
        <li>
          <a href="/women">Women</a>
        </li>
        <li>
          <a href="/electronics">Electronics</a>
        </li>
        <li>
          <a href="/jewellery">Jewellery</a>
        </li>
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
