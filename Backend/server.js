const express = require("express");
const authRouter = require("./routes/auth-router");
const app = express();

app.use(express.json());
app.use("", authRouter);
app.listen(8000, () => {
  console.log("Server Started on http://localhost:8000");
});
