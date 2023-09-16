import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";

const SearchProduct = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex py-5 justify-center items-center">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        className=" w-3/12 px-3 py-1 rounded-l-full border border-indigo-300 outline-none shadow-indigo-500"
      />
      <button className="px-3 py-2 rounded-r-full border border-indigo-300 shadow-indigo-500 bg-indigo-100">
        <FaSistrix />
      </button>
    </div>
  );
};

export default SearchProduct;
