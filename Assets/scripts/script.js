// Assignment Code
var generateBtn = document.querySelector("#generate");

function ramdomUpper(){
  var UpperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return UpperLetter[Math.floor(Math.random()*UpperLetter.length)];
}

function ramdomLower(){
  var LowerLetter = 'abcdefghijklmnopqrstuvwxyz'
  return LowerLetter[Math.floor(Math.random()*LowerLetter.length)];

}

function ramdomNumber(){
  var Num = '0123456789'
  return Num[Math.floor(Math.random()*Num.length)];

}

function specialChar(){
  var SpecialChar = '!@#$%^&*()_+-={}[]:"\';<>?,./`~'
  return SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
}


function generatePassword(){


  var pwdLength = Number(window.prompt('Enter password length','8-128'));
    if (pwdLength === null){

      return;
    }
    
    else {

      while (pwdLength < 8 || pwdLength > 128) {
         
        if(pwdLength === 0){break;}

        else{
              console.log("hello " +pwdLength)
              console.log("type is : " +typeof pwdLength)
              window.alert("Length can only be between 8-128");
              pwdLength = Number(window.prompt('Enter password length', '8-128'));
            } //end else condition
       }//end while loop
   
    

    }

    



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
