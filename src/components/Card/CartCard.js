import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  quantityDecrease,
  removeFromCart,
} from "../../slices/cartSlice";

const CartCard = (item) => {
  const dispatch = useDispatch();

  const { title, price, image, category, id, cartQuantity } = item;

  return (
    <div className="flex flex-col md:flex-row items-center hover:bg-gray-100 px-2 md:px-6 py-2 md:py-5">
      <div className="md:flex w-full md:w-2/5">
        <div className="w-1/2 md:w-1/3">
          <img className="h-16 md:h-24 lg:h-32" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-2 md:ml-4 flex-grow">
          <span className="font-bold text-sm md:text-base lg:text-lg">
            {title}
          </span>
          <span className="text-indigo-700 capitalize text-xs md:text-sm lg:text-base">
            {category}
          </span>
          <span
            className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs md:text-sm lg:text-base"
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="md:flex justify-center w-full md:w-1/5 mt-2 md:mt-0">
        <span
          onClick={() => dispatch(quantityDecrease(id))}
          className="mt-1 cursor-pointer"
        >
          <svg
            className="fill-current text-gray-600 w-2 md:w-3 lg:w-4"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0-32 14.33-32 32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </span>

        <input
          className="mx-1 border text-center w-6 md:w-8 lg:w-10"
          type="text"
          value={cartQuantity}
          readOnly
        />
        <span
          onClick={() => dispatch(addToCart(item))}
          className="mt-1 cursor-pointer"
        >
          <svg
            className="fill-current text-gray-600 w-2 md:w-3 lg:w-4"
            viewBox="0 0 448 512"
          >
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </span>
      </div>
      <span className="text-center w-full md:w-1/5 mt-2 md:mt-0 font-semibold text-xs md:text-sm lg:text-base">
        $ {price}
      </span>
      <span className="text-center w-full md:w-1/5 mt-2 md:mt-0 font-semibold text-xs md:text-sm lg:text-base">
        $ {price * cartQuantity}
      </span>
    </div>
  );
};

export default CartCard;
