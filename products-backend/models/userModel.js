import { sequelize } from "../db/config.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", {
  username: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: "123",
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
  },
});

const syncUser = async () => {
  try {
    await User.sync();
    console.log("User Table and Model Synched.");
  } catch (error) {
    console.log(err);
  }
};
export { User, syncUser };
