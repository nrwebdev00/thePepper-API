const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // convert empty fields to string
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //First and Last Name Check
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is Required.";
  } else if (data.firstName.length < 2) {
    errors.firstName = "First Name Must be at Least 3 Characters Long.";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is Required.";
  } else if (data.lastName.length < 2) {
    errors.lastName = "Last Name Must be at least 3 Characters Long.";
  }

  //Email Check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is Invalid";
  }

  //Password Check
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
