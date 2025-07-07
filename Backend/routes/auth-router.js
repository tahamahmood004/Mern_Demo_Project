const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth-controller");

authRouter.get("/", authController.home);

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

module.exports = authRouter;
