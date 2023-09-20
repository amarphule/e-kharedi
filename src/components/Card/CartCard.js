import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";

const CartCard = (item) => {
  const dispatch = useDispatch();

  const { title, price, image, description, category, rating, id } = item;

  return (
    <div className="flex items-center hover:bg-gray-100  px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <span className="text-indigo-700 capitalize text-xs">{category}</span>
          <span
            className="cursor-pointer font-semibold hover:text-red-500 text-gray-500 text-xs"
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </span>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input className="mx-2 border text-center w-8" type="text" value="1" />

        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">$ {price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">$ {price}</span>
    </div>
  );
};

export default CartCard;
