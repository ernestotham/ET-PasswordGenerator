// Assignment Code
var generateBtn = document.querySelector("#generate");

//validate  if string contains numbers using regex
function containsNumbers(str){
  var regexp = /\d/g;
  return regexp.test(str);
};

//return random a uppercase letter
function randomUpper(){
  var UpperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return UpperLetter[Math.floor(Math.random()*UpperLetter.length)];
}

//return random lowercase letter
function randomLower(){
  var LowerLetter = 'abcdefghijklmnopqrstuvwxyz'
  return LowerLetter[Math.floor(Math.random()*LowerLetter.length)];

}

//return random number
function randomNumber(){
  var Num = '0123456789'
  return Num[Math.floor(Math.random()*Num.length)];

}

//return random special char
function randomSpecialChar(){
  var SpecialChar = '!@#$%^&*()_+-={}[]:"\';<>?,./`~'
  return SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
}


function generatePassword(){
  var secret = '';
  var brakepoint = true;
  var pwdLength = Number(window.prompt('Enter password length','20'));
  //console.log("initial value: " +pwdLength )
  //console.log(typeof pwdLength)
      while (brakepoint ==true) {
        
        //check to see if password length is null 
        if(pwdLength === 0){
          //console.log("brakepoint checking 0 " +pwdLength);
          //pwdLength = Number(window.prompt('Enter password length','8-128'));
          return "Your Secure Password";
        }
        //check to see if password length is null 
        else if(pwdLength === null){
          //console.log("brakepoint checking null" +pwdLength);
          return "Your Secure Password";
        }
        //check to see if password length is between the minimum length criteria
        //This is to brake the loop and continue to generate password
        else if(pwdLength > 7 && pwdLength < 129){
          //console.log("brakepoint checking >7 <128" +pwdLength);
            break;}
        
        //check to see if letters were enter for password length 
        else if(!containsNumbers(pwdLength)){
              window.alert("Password length can only be a number between 8 -128",'20');
              pwdLength = Number(window.prompt('Enter a number for the password length between 8 and 128'));
        }

        //check to see if password length is not meeting the criteria and prompt the user again for the right length input
        else if(pwdLength < 8 || pwdLength > 128){
             console.log("brakepoint checking <8 > 128" +pwdLength);
              //console.log("hello " +pwdLength);
              //console.log("type is : " +typeof pwdLength);
              window.alert("Length can only be between 8-128");
              pwdLength = Number(window.prompt('Enter password length', '20'));
            } //end else condition
      }//end while loop
   
      

      

    
    //option to include in the password generator
    var options = []
    var Cupper = window.confirm("Do you want to include uppercase letters?");
    console.log("Cupper: "+ Cupper);

    var Clower = window.confirm("Do you want to include lowercase letters?");
    //console.log("Clower: "+ Clower);

    var Cnum = window.confirm("Do you want to include numbers?");
    //console.log("Cnum: "+ Cnum);

    var CsChars = window.confirm("Do you want to include special characters?");
    //console.log("CsChars: "+ CsChars);

    

    //selected options into  array variable
    //random assign password value at least one char of the selected type
    //reduce the length of the password by 1 if type is selected

    if(Cupper){
      options.push('Cupper');
      secret += randomUpper();
      pwdLength--;
      //console.log(pwdLength);

    }
    if(Clower){
      options.push('Clower');
      secret +=  randomLower();
      pwdLength--;
      //console.log(pwdLength);
    }
    if(Cnum){
      options.push('Cnum');
      secret += randomNumber();
      pwdLength--;
      //console.log(pwdLength);
    }
    if(CsChars){
      options.push('CsChars');
      secret += randomSpecialChar();
      pwdLength--;
      //console.log(pwdLength);
    }

    //Check for condition that at least one one type is selected or start over
    //console.log("options selected " +options);
    if(options == ""){
      
      console.log("options is null");
      window.alert("At least one type needs to be selected (uppercase, lowercase, numbers, special characters)");
      writePassword();
          
        
        
    }//end if for checking options type was selected


    //no type was selected, warn and start over
  else{
        //loop to complete random password
        for(var i=0;i <pwdLength; i++ ){

          //random select option (num, uppeLetter, loweletter, symbol)

          //select at random one of the type and append to secret at random one of the values
          opt = options[Math.floor(Math.random()*options.length)];
          //console.log("opt: " + opt);
          
              //if uppercase letter option was selected, reserve at random an uppercase letter and reduce pwd length by 1
              if(opt === 'Cupper'){
                secret += randomUpper();
                console.log("secret partial upper : " +secret)
              }

              //if lowercase letter option was selected, reserve at random a lowercase letter and reduce pwd length by 1
              if(opt === 'Clower'){
                secret += randomLower();
                console.log("secret partial : lower " +secret)
              }

              //if number option was selected, reserve at random a number and reduce pwd length by 1
              if(opt === 'Cnum'){
                secret += randomNumber();
                console.log("secret partial num : " +secret)
              }

              //if special char option was selected, reserve at random an special char and reduce pwd length by 1
              if(opt === 'CsChars'){
                secret += randomSpecialChar();
                console.log("secret partial Char: " +secret)
              }

          //console.log("secret partial : " +secret)

        } //end for loop
        
        
  }//end of else. condition met at least one type was selected


  return secret

}//end of function

// Write password to the #password input
function writePassword() {
  //debugger
  var password = generatePassword();
  console.log("return from generate password: "+password)

  //corrected a bug with overwriting password with black when user did not select any type and loop restart hte user to tenter new input 
  if(!password ==""){
  var passwordText = document.querySelector("#password");
  console.log("writing password to textArea")
  console.log(passwordText)
  passwordText.value = password;
  console.log(passwordText)
  }
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
