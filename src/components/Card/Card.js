import React from "react";
import { FaStar, FaCommentAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

const Card = (product) => {
  const dispatch = useDispatch();
  const { title, price, image, description, category, rating } = product;

  return (
    <div className="h-2/4 m-4 w-72">
      <div className="h-full rounded-lg border shadow-sm hover:shadow-xl">
        <div className="relative overflow-hidden bg-cover bg-no-repeat flex justify-center p-1 h-36">
          <img
            className="lg:h-48 md:h-36 w-full object-contain object-center drop-shadow-md rounded-md"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xs uppercase title-font font-medium text-gray-500 mb-1">
            {category}
          </h2>
          <h1 className=" line-clamp-1 title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="line-clamp-3 text-base leading-relaxed mb-4">
            {description}
          </p>
          <h3 className="text-l font-bold mb-3">
            Price: <span>${price}</span>
          </h3>
          <div className="flex items-center self-end flex-wrap">
            <button
              type="button"
              className="inline-block rounded-full bg-indigo-900 p-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-indigo-500 "
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
            <span className="text-gray-600 mr-2 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-1 py-1 border-r-2 border-gray-300">
              <FaStar /> {rating.rate}
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm">
              <FaCommentAlt />
              {rating?.count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
