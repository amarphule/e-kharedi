import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const { products, isLoading, error } = useSelector((store) => store.products);

  console.log({ products, isLoading, error });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (isLoading) {
    return "Loading...";
  }

  if (error) {
    return <h1 className="text-center text-red-600">{error}</h1>;
  }
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Home;
