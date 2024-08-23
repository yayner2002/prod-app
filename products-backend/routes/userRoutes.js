import express from "express";
import { createUser } from "../controllers/userControllers.js";
// initialize express router here
const router = express.Router();

// define register a user
router.post("/", createUser);

export default router;
