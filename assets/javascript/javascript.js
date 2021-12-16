// Assignment Code
var generateBtn = document.querySelector("#generate");

// characters for password
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "!@#$%^&*()?.";

var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {

//   var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var numOfChar = prompt("enter the length of password");
  if (!(numOfChar >= 8 && numOfChar < 128)) {
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

  var passwordLength = numofChar;
  var password = "";

  for (var i=0; i<=passwordLength; i++)
  
  //save those confirmations in separate variables
  // store all the values in form of arrays
  // var numeric = [0,1,2,3...]
  //based on user confirmation pick the correct arrays and concatenate them and store that concat array in new    variable
  //loop num times
  //generate random num for concat array and grab the item
  //push that item in new password array
  // return new password
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();

