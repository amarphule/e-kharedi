import React, { useEffect } from "react";
import CartCard from "../Card/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeAll, totalCartPriceAndQuantity } from "../../slices/cartSlice";

export const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((store) => store?.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalCartPriceAndQuantity());
  }, [dispatch, cartItems]);

  return (
    <div className="container mx-auto mt-3">
      {cartItems.length === 0 ? (
        <div className="text-center h-screen flex flex-col items-center justify-center">
          <p className="text-4xl text-slate-500 mb-4">
            Your cart is currently empty
          </p>
          <p>
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-2xl "
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Start Shopping
            </Link>
          </p>
        </div>
      ) : (
        <div className="flex shadow-md my-3">
          <div className="w-3/4 bg-white px-16 py-3">
            <div className="flex justify-between border-b pb-8">
              <h1 className=" flex font-semibold flex-col text-2xl">
                Shopping Cart
                <p
                  className="text-sm cursor-pointer text-slate-500 py-1 px-3 text-center hover:bg-slate-700 hover:text-slate-50 bg-gray-300 rounded-3xl"
                  onClick={() => dispatch(removeAll())}
                >
                  Clear Cart
                </p>
              </h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            <div className="h-96 overflow-y-auto">
              {cartItems.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>
            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div className="w-1/4 px-8 py-3 bg-slate-100">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">${cartTotalAmount}</span>
            </div>
            <div>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  Standard shipping
                </span>
                <span className="font-semibold text-sm"> $10.00</span>
              </div>
            </div>

            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${Number(cartTotalAmount) + 10}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
