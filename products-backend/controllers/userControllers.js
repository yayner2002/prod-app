import { User } from "../models/userModel.js";

const createUser = async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  const user = {
    username,
    email,
    password,
    isAdmin,
  };
  try {
    await User.create(user);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export { createUser };
