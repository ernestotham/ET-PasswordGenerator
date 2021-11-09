// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword(){


  var pwdLength = window.prompt("Enter password length");




  return "cnasdnsdkfsjdfl"

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
