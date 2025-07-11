const Contact = require("../models/contact-model");

const contact = async (req, res) => {
  try {
    const response = req.body;
    await Contact.create(response);

    res.status(201).json({ alert: "Your message is sent!" });
  } catch (error) {
    res
      .status(400)
      .json({ alert: "Your message is not sent!\n Error:", error });
  }
};
module.exports = contact;
