//controller handles logic in form of functions
const User = require("../models/auth-model");
const bcrypt = require("bcryptjs");
const home = async (req, res) => {
  res.status(200).send("Welcome to Homepage using Controller");
};
const register = async (req, res) => {
  try {
    // store data in username from req.body using structuring method
    // const username = req.body.username

    // destructuring data from req.body
    const { username, email, password, phone } = req.body;
    // if user failing to fill in all required fields
    if (!username || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    //find if user email i already exist
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ message: "Email is already exists!" });
    }

    else {
      //hashing password
      const saltRound = 10;
      const hash_pass = await bcrypt.hash(password, saltRound);

      //insert data if user email is not exist
      const userCreated = await User.create({
        username,
        email,
        password: hash_pass,
        phone,
      });
      res.status(201).json({ message: "User registered successfully!\n", userCreated });
    }
  } catch (error) {
    console.error(error);
  }
};
const login = async (req, res) => {
try {
  const { email, password } = req.body;
  if (!email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }
  const userExist = await User.findOne({ email: email });
  if (!userExist) {
    res.status(404).send({message: "No user found"});
  }
  //comparing password with hashed password in database
  const user_pass = await bcrypt.compare(password, userExist.password);
  if (user_pass) {
    //generate json web token
    const token = await userExist.generateToken();
    res.status(200).json({ message: "Login Successfully!",
      token:token,
      userId: userExist._id.toString()
    });

  } else {
    res.status(401).json({ message: "password invalid" });
  }
} catch (error) {
  console.error(error.message);
  return res.status(500).json({message: "Server Error!!!"})
}
};
module.exports = { home, register, login };
