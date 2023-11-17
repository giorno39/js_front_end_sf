function passwordValidation(password) {
  let is_valid = 0;
  function lengthValidation(pass) {
    if (pass.length < 6 || pass.length > 10) {
      console.log("Password must be between 6 and 10 characters");
      return 0;
    }
    return 1;
  }

  function isAlphaNum(pass) {
    let regex = /^[a-z0-9]+$/gi;
    if (regex.test(pass)) {
      return 1;
    }
    console.log("Password must consist only of letters and digits");
    return 0;
  }

  function hasEnoughdigits(pass, numOfdigits) {
    let regex = /\d/g;
    let matchedDigits = pass.match(regex);
    if (matchedDigits === null || matchedDigits.length < numOfdigits) {
      console.log("Password must have at least 2 digits");
      return 0;
    }
    return 1;
  }

  is_valid += lengthValidation(password);
  is_valid += isAlphaNum(password);
  is_valid += hasEnoughdigits(password, 2);

  if (is_valid === 3) {
    console.log("Password is valid");
  }
}
