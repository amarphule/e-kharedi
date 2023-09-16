import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
import Shimmer from "../Card/Shimmer";

const Home = () => {
  const { products, isLoading, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    return <h1 className="text-center text-red-600">{error}</h1>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {isLoading
        ? [...Array(20)].map((e, i) => <Shimmer key={i} />)
        : products.map((product) => <Card key={product.id} {...product} />)}
    </div>
  );
};

export default Home;
