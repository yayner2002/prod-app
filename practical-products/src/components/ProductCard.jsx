/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const styles = {
    card: {
      maxWidth: "500px",
      height: "300px",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
      margin: "16px",
    },
    image: {
      width: "100%",
      height: "220px",
      objectFit: "contain",
    },
    content: {
      padding: "16px",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },
    price: {
      fontSize: "16px",
      color: "#888",
    },
  };

  return (
    <Link>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.content}>
          <div style={styles.title}>{product.name}</div>
          <div style={styles.price}>${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
