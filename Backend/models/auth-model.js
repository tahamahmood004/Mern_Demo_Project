const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.generateToken = async function() {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
    "secretKey",
    {
      expiresIn: '30d',
    }
  )
  } catch (error) {
    console.error("Token generation error", error);    
  }
}

const User = new mongoose.model("User", userSchema);

module.exports = User;
