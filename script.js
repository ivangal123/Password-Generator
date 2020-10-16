// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password 
function generatePassword() {
  var userSelection = promptUser()
  console.log (userSelection);
  return '123';

}

// Generate password 
function promptUser() {
  
  var passwordLenghtStr = prompt ("Please provide password lenght 8 - 128", "10");
  var passwordLenghtNum = parseInt (passwordLenghtStr);

  var lowerCaseStr = prompt ("Would you like a lowercase letter? y/n", "y");
  var isLowerCase = lowerCaseStr === "y" || lowerCaseStr === "Y";

  var upperCaseStr = prompt ("Would you like an uppercase letter? Y/N", "Y");
  var isUpperCase = upperCaseStr === "y" || upperCaseStr === "Y";

  var numeric = prompt ("Would you like a number? y/n", "y");
  var isNumeric = numeric === "y" || numeric === "Y";

  var specialCharStr = prompt ("Would you like a special character? y/n", "y");
  var isSpecialChar = specialCharStr === "y" || specialCharStr === "Y";

return {passwordLenghtNum, isLowerCase, isUpperCase, isNumeric, isSpecialChar}
}
