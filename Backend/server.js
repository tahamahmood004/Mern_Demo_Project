const express = require("express");
const authRouter = require("./routes/auth-router");
const contactRouter = require("./routes/contact-router")
const connectDb = require("./Config/db");
const app = express();

app.use(express.json());
app.use("", authRouter);
app.use("", contactRouter);

connectDb().then(() => {
  app.listen(8000, () => {
    console.log("Server Started on http://localhost:8000");
  });
});
