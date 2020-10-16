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
  var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numericArray = "1234567890".split("");
  var specialCharArray = "!@#$%^&*()_+|\?[]{}".split("");

  var userSelection = promptUser();

  var passwd = "";
  //console.log (userSelection.passwordLenghtNum);
  //console.log (passwd.length);
  while (passwd.length < userSelection.passwordLenghtNum) {
   passwd = passwd + (userSelection.isLowerCase?lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]:"")
   passwd = passwd + (userSelection.isUpperCase?upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]:"")
   passwd = passwd + (userSelection.isNumeric?numericArray[Math.floor(Math.random()*numericArray.length)]:"")
   passwd = passwd + (userSelection.isSpecialChar?specialCharArray[Math.floor(Math.random()*specialCharArray.length)]:"")

  }
  
  
  return passwd.substr(0, userSelection.passwordLenghtNum);

}

// Generate password 
function promptUser() {
  
  var passwordLenghtStr = prompt ("Please provide password lenght 8 - 128", "10");
  var passwordLenghtNum = parseInt (passwordLenghtStr);
  passwordLenghtNum = passwordLenghtNum < 8 ? 8 : passwordLenghtNum;
  passwordLenghtNum = passwordLenghtNum > 128 ? 128 : passwordLenghtNum;

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
