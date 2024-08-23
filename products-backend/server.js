import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/config.js";
import { syncProduct } from "./models/productModel.js";
import { syncUser } from "./models/userModel.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import bodyParser from "body-parser";
import cors from "cors"
dotenv.config();
connectDB();
syncProduct();
syncUser();

const PORT = process.env.PORT;
// initialize express app
const app = express();
app.use(bodyParser.json())
// use the cors middleware 
app.use(cors())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)


// specify which port number the server will listen
app.listen(PORT, () => {
  console.log(`Exprees Server is listening on ${PORT}...`);
});
