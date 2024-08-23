import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const styles = {
    form: {
      maxWidth: "400px",
      padding: "16px",
      paddingRight: "2rem",
      margin: "2rem auto",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: "white",
      color: "#000",
    },
    formGroup: {
      marginBottom: "16px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      display: "block",
      width: "100%",
      padding: "10px",
      borderRadius: "4px",
      border: "none",
      backgroundColor: "#3B82F6",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
    },
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      countInStock,
      brand,
      category,
      image,
    };

    // make an http post request to post the prodct
    fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((product) => console.log(product));
      navigate("/")
  };
  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <h2>Add Product</h2>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>
          Product Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="image" style={styles.label}>
          Image URL
        </label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          id="image"
          name="image"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="description" style={styles.label}>
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          id="description"
          name="description"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="brand" style={styles.label}>
          Brand
        </label>
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          type="text"
          id="brand"
          name="brand"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="category" style={styles.label}>
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
          id="category"
          style={styles.input}
        >
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="price" style={styles.label}>
          Price
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          id="price"
          name="price"
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="countInStock" style={styles.label}>
          CountInStock
        </label>
        <input
          type="number"
          id="countInStock"
          name="countInStock"
          style={styles.input}
          value={countInStock}
          onChange={(e) => setCountInStock(e.target.value)}
        />
      </div>
      <button type="submit" style={styles.button}>
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
