const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const ProfileUser = require("../models/ProfileUser");
const validateProfileInput = require("../validation/profile");

// @route POST api/profile/new
// @desc Set profile first time
// @access PRIVATE - only log in
router.post("/new", (req, res) => {
  const { errors, isValid } =validateProfileInput(req.body)
  //Check is profile is set
  //save profile info
});

// @route PUT api/profile/update
// @desc update profile info
// @access PRIVATE - only log in
router.put("/update", (req, res) => {
  // Form Valdation
  //Save update info
});

// @route GET api/profile/user
// @desc get user profile details
// @access PRIVATE - only log in
router.get("/user", (req, res) => {
  //get user profile by user id
});

module.exports = router;
