const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String },
    email: { type: String, required: true },
    phoneNo: { type: String },
    countrycode: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
