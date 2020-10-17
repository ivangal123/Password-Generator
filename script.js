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

  //create arrays of all allowed characters (lowercase and uppercase letters, digits 0-9 and special characters)
  //the split() method is used to split a string into an array of substrings, and returns the new array
  var lowerCaseArray = "abcdefghijklmnopqrstuvwxyz".split(""); //array of lowercase letters
  var upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); //array of uppercase letters
  var numericArray = "1234567890".split("");                   //array of digits
  var specialCharArray = "!@#$%^&*()_+|\?[]{}<>,.:;".split("");      //array of special characters

  var userSelection = promptUser();

  //set passwd to an empty string 
  var passwd = "";
  //console.log (userSelection.passwordLenghtNum);
  //console.log (passwd.length);

  //add characters to the generated passwd till desired password lenght from userSelection
  while (passwd.length < userSelection.passwordLenghtNum) {
   //if user wants lowercase, randomly get from lowerCaseArray else append empty string ""
   passwd = passwd + (userSelection.isLowerCase?lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)]:"");

   //if user wants uppercase, randomly get from upperCaseArray else append empty string ""
   passwd = passwd + (userSelection.isUpperCase?upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)]:"");

   //if user wants numeric, randomly get from numericArray else append empty string ""
   passwd = passwd + (userSelection.isNumeric?numericArray[Math.floor(Math.random()*numericArray.length)]:"");
   
   //if user wants special character, randomly get from specialCharArray else append empty string ""
   passwd = passwd + (userSelection.isSpecialChar?specialCharArray[Math.floor(Math.random()*specialCharArray.length)]:"");

  }
  
  //ensuring the length of the password does not exceed the chosen lenght
  //the substr() method extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters.
  return passwd.substr(0, userSelection.passwordLenghtNum);

}

// Prompt user
function promptUser() {
  
  //prompt user for password length, make 10 a default
  var passwordLenghtStr = prompt ("Please provide password lenght 8 - 128", "10");
  //convert the string passwordLenghtStr to a number and save in var passwordLenghtNum
  var passwordLenghtNum = parseInt (passwordLenghtStr);
  //if the user enters password lenght < 8 set password lenght = 8
  passwordLenghtNum = passwordLenghtNum < 8 ? 8 : passwordLenghtNum;
  //if the user enters password lenght > 128 set password lenght = 128
  passwordLenghtNum = passwordLenghtNum > 128 ? 128 : passwordLenghtNum;

  //ask the user whether they would like lowercase in their password, make defaul yes "y"
  var lowerCaseStr = prompt ("Would you like a lowercase letter? y/n", "y");
  //if the user answers yes lowercase "y" or uppercase "Y" then the var isLowerCase is set to true otherwise it is set to false
  var isLowerCase = lowerCaseStr === "y" || lowerCaseStr === "Y";

  //similarly as above - ask the user whether they would like uppercase in their password, make defaul yes "y" 
  var upperCaseStr = prompt ("Would you like an uppercase letter? Y/N", "Y");
  //if the user answers yes lowercase "y" or uppercase "Y" then the var isUpperCase is set to true otherwise it is set to false
  var isUpperCase = upperCaseStr === "y" || upperCaseStr === "Y";

  //ask the user whether they would like numeric in their password, make defaul yes "y" 
  var numeric = prompt ("Would you like a number? y/n", "y");
  //if the user answers yes lowercase "y" or uppercase "Y" then the var isNumeris is set to true otherwise it is set to false
  var isNumeric = numeric === "y" || numeric === "Y";

  //ask the user whether they would like special character in their password, make defaul yes "y" 
  var specialCharStr = prompt ("Would you like a special character? y/n", "y");
  //if the user answers yes lowercase "y" or uppercase "Y" then the var isSpecialChar is set to true otherwise it is set to false
  var isSpecialChar = specialCharStr === "y" || specialCharStr === "Y";

 //the function promptUser returns returns the desired password lenght and Boolean values for isLowerCase, isUpperCase, isNumeric, isSpecialChar
return {passwordLenghtNum, isLowerCase, isUpperCase, isNumeric, isSpecialChar}
}
