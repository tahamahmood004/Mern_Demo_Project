//controller handles logic in form of functions
const home = async (req, res) => {
  res.status(200).send("Welcome to Homepage using Controller");
};
const register = async (req, res) => {
    const data = req.body;
    console.log(data);
    
    res.status(200).send(data.email);
};
const login = async (req, res) => {
  res.status(200).send("Welcome to Login page using Controller");
};
module.exports = { home, register, login };
