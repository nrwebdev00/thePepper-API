const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.user = !isEmpty(data.user) ? data.user : "";
  data.streetAddress1 = !isEmpty(data.streetAddress1)
    ? data.streetAddress1
    : "";
  data.streetAddress2 = !isEmpty(data.streetAddress2)
    ? data.streetAddress2
    : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.state = !isEmpty(data.state) ? data.state : "";
  data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";

  // Check is user set
  if (Validator.isEmpty(data.user)) {
    errors.user = "must be logged in to update user info";
  }
  // Check if Profile is Set

  // Address Validation
  if (Validator.is(data.streetAddress1)) {
    errors.streetAddress1 = "Please enter an address";
  }
  // City Validation
  if (Validator.isEmpty(data.city)) {
    errors.city = "Please enter a City";
  }

  //State Validation
  if (Validator.isEmpty(data.state)) {
    errors.state = "Please enter a State";
  }

  //zip Code Validation
  if (Validator.isEmpty(data.zipCode)) {
    errors.zipCode = "Please enter a zip code";
  }

  //Phone Validation
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Please enter a phone number";
  }

  //opt in text

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
