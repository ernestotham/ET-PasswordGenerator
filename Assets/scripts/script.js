// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomUpper(){
  var UpperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return UpperLetter[Math.floor(Math.random()*UpperLetter.length)];
}

function randomLower(){
  var LowerLetter = 'abcdefghijklmnopqrstuvwxyz'
  return LowerLetter[Math.floor(Math.random()*LowerLetter.length)];

}

function randomNumber(){
  var Num = '0123456789'
  return Num[Math.floor(Math.random()*Num.length)];

}

function randomSpecialChar(){
  var SpecialChar = '!@#$%^&*()_+-={}[]:"\';<>?,./`~'
  return SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
}


function generatePassword(){
  var secret = '';

  var pwdLength = Number(window.prompt('Enter password length','8-128'));
    if (pwdLength === null){

      return;
    }
    
    else {

      while (pwdLength < 8 || pwdLength > 128) {
         
        if(pwdLength === 0){break;}

        else{
              console.log("hello " +pwdLength);
              console.log("type is : " +typeof pwdLength);
              window.alert("Length can only be between 8-128");
              pwdLength = Number(window.prompt('Enter password length', '8-128'));
            } //end else condition
       }//end while loop
   
       var pwdLength = Number(window.prompt('Enter password length','8-128'));

    }

    
    //option to include in the password generator
    var options = []
    var Cupper = window.confirm("Do you want to include uppercase letters?");
    console.log("Cupper: "+ Cupper);

    var Clower = window.confirm("Do you want to include lowercase letters?");
    console.log("Clower: "+ Clower);

    var Cnum = window.confirm("Do you want to include numbers?");
    console.log("Cnum: "+ Cnum);

    var CsChars = window.confirm("Do you want to include special characters?");
    console.log("CsChars: "+ CsChars);

    

    //selected option array variable
    if(Cupper ===true){
      options.push('Cupper');
    }
    if(Clower ===true){
      options.push('Clower');
    }
    if(Cnum ===true){
      options.push('Cnum');
    }
    if(CsChars ===true){
      options.push('CsChars');
    }

    console.log("options selected " +options);

    for(var i=0;i <pwdLength; i++ ){

      //random select option (num, uppeLetter, loweletter, symbol)

      //append char to secret
      opt = options[Math.floor(Math.random()*options.length)];
      console.log("opt: " + opt);
      
      
          if(opt === 'Cupper'){
            secret += randomUpper();
            console.log("secret partial upper : " +secret)
          }
          if(opt === 'Clower'){
            secret += randomLower();
            console.log("secret partial : lower " +secret)
          }
          if(opt === 'Cnum'){
            secret += randomNumber();
            console.log("secret partial num : " +secret)
          }
          if(opt === 'CsChars'){
            secret += randomSpecialChar();
            console.log("secret partial Char: " +secret)
          }

      console.log("secret partial : " +secret)

    }


  return secret

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
