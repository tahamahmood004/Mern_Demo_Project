const mongoose = require("mongoose");

try {
  connectDb = async () => {
    await mongoose.connect("mongodb://localhost:27017/mern_admin");
    console.log("Database Connected!");
  };
} catch (error) {
  console.error(error);
}
module.exports = connectDb;