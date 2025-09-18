const express = require("express");
const router = express.Router();
const {
  contactUsController,
  showAllContacts,
} = require("../controllers/ContactUs");
const { auth, isAdmin } = require("../middlewares/auth");

router.post("/contact", contactUsController);
router.get("/getContacts", auth, isAdmin, showAllContacts);

module.exports = router;
