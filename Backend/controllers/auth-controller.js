//controller handles logic in form of functions
const User = require("../models/auth-model");
const home = async (req, res) => {
  res.status(200).send("Welcome to Homepage using Controller");
};
const register = async (req, res) => {
  try {
    // store data in username from req.body using structuring method
    // const username = req.body.username

    // destructuring data from req.body
    const { username, email, password, phone } = req.body;

    //find if user email i already exist
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ message: "Email is already exists!" });
    }

    //insert data if user email is not exist
    else {
      const userCreated = await User.create({
        username,
        email,
        password,
        phone,
      });
      res.status(201).json({ message: "User registered successfully!\n", userCreated });
    }
  } catch (error) {
    console.error(error);
  }
};
const login = async (req, res) => {
  res.status(200).send("Welcome to Login page using Controller");
};
module.exports = { home, register, login };
