import { useEffect, useState } from "react";
import Product from "../components/ProductCard";
import products from "../products";

const Home = () => {
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // make a get request to http://localhost:5000/api/products
        if (!res.ok) {
          throw new Error("Failed to Fetch products.");
        }

        // set the product part of your state
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Featured Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          margin: "auto",
          gap: "6",
        }}
      >
        {products.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </>
  );
};

export default Home;
