import React, { useEffect } from "react";
import Card from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../slices/productsSlice";
import Shimmer from "../../components/Card/Shimmer";
import SearchProduct from "../../components/Search/SearchProduct";

const Home = () => {
  const { products, isLoading, error } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  const query = useSelector((store) => store.products.searchQuery);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    return <h1 className="text-center text-red-600">{error}</h1>;
  }

  return (
    <>
      <SearchProduct />
      <div className="flex flex-wrap justify-center">
        {isLoading
          ? [...Array(20)].map((e, i) => <Shimmer key={i} />)
          : products
              .filter((item) => item.title.toLowerCase().includes(query))
              .map((product) => <Card key={product.id} {...product} />)}
      </div>
    </>
  );
};

export default Home;
