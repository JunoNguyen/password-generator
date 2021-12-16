// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters for password
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()?.";

var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

function generatePassword() {

  var charNum = prompt("enter the length of password");
  if (!(charNum >= 8 && charNum < 128)) {
    return;
  }
  
  var specialChar = prompt("do you want special characters?");
  if (!(specialChar !="yes" || specialChar !="no")) {
     
  }

  var caps = prompt("do you want uppercase characters?");
  if (!(caps !="yes" && caps !="no")) {

  }

  var lowerCaps = prompt("do you want lowercase characters?");
  if (lowerCaps =="yes" || lowerCaps =="no") {
    
  }

  var passwordLength = charNum;
  var password = "";

  for (var i=0; i<=passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * alphabet.length);
      password +- alphabet.substring(randomNumber, randomNumber +1);
  }

  passwordText.value = password;

  console.log(charNum);
  
  //save those confirmations in separate variables
  // store all the values in form of arrays
  // var numeric = [0,1,2,3...]
  //based on user confirmation pick the correct arrays and concatenate them and store that concat array in new    variable
  //loop num times
  //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();

console.log(generatePassword(passwordText));