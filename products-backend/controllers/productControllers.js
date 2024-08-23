import { where } from "sequelize";
import { Product } from "../models/productModel.js";

// @desc  Add  product
// @route POST /api/products
const createProduct = async (req, res) => {
  const {
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  } = req.body;

  const product = {
    name,
    image,
    description,
    brand,
    category,
    price,
    countInStock,
    rating,
    numReviews,
  };
  try {
    await Product.create(product);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({
      where: {
        id,
      },
    });
    if (!product) {
      res.status(404).json({ message: "Product not found." });
    }
    await product.destroy();
    res.status(200).json({ message: `product with id: ${id} deleted.` });
  } catch (error) {
    res.status(500).json({ message: "Something Went Wrong." });
    console.log(error);
  }
};

// @desc  Fetch all products
// @route GET /api/products

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

// @desc  Fetch Single Product
// @route GET /api/products/:id

const getProductById = async (req, res) => {
  const { id: productId } = req.params;
  try {
    const product = await Product.findAll({
      where: {
        id: productId,
      },
    });
    if (product) {
      res.status(200).json(product);
    }
    res.status(404).json({ message: "Product not found." });
  } catch (error) {
    console.log(error);
  }
};

export { createProduct, deleteProduct, getAllProducts, getProductById };
