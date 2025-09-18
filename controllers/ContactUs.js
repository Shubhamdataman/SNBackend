const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");
const contact = require("../models/Contact");

exports.contactUsController = async (req, res) => {
  const { email, firstname, lastname, message, phoneNo, countrycode } =
    req.body;
  // console.log(req.body)
  try {
    const contactData = await contact.create({
      firstname,
      lastname,
      email,
      phoneNo,
      countrycode,
      message,
    });
    const emailRes = await mailSender(
      email,
      "Your Data send successfully",
      contactUsEmail(email, firstname, lastname, message, phoneNo, countrycode)
    );
    // console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    // console.log("Error", error)
    // console.log("Error message :", error.message)
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
exports.showAllContacts = async (req, res) => {
  try {
    // console.log("INSIDE SHOW ALL CATEGORIES");
    const allContacts = await contact.find({});
    res.status(200).json({
      success: true,
      data: allContacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
