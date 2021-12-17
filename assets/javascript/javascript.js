var wantNumbers;
var wantSpecialChar;
var wantCaps;
var wantRegularText;
var charNum;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[","]", "^", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

password = [];

choices = [];

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

function writePassword() {
  password = generatePassword();
  
  var passwordText = document.querySelector("#password").textContent;

  passwordText = password;
};

function customPassword() {
  password = [];
  for (var i = 0; i < charNum; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
  }
  
  var passwordText = password.join("");
  document.querySelector("#password").textContent= password.join("");
  return passwordText;
};


function generatePassword() {
  
  charNum = prompt("enter the length of password");
  if ((charNum >= 8 && charNum < 128)) {
    
    var specialChar = prompt("do you want special characters?");
    if (specialChar =="yes") {
      var wantSpecialChar = true;
    } else if (specialChar == "no") {
      var wantSpecialChar = false;
    };
    
    var caps = prompt("do you want uppercase characters?");
    if (caps=="yes") {
      var wantCaps = true;
    } else if (caps=="no") {
      var wantCaps = false;
    };
  
    var numbers = prompt("do you want numbers?");
    if (numbers=="yes") {
      var wantNumbers = true;
    } 
    else if (numbers=="no") {
      var wantNumbers = false;
    };
  
    var regulartext = prompt("do you want lower case?");
    if (regulartext=="yes") {
      var wantRegularText = true;
    } else if (RegularText = "no") {
      var wantRegularText = false;
    };
  
    if (wantCaps==true && wantSpecialChar==true && wantNumbers==true && wantRegularText==true) {
      choices = character.concat(number,alpha,alpha2);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==true && wantRegularText==true) {
      choices = character.concat(number,alpha);
    } 
  
    else if (wantCaps==false && wantSpecialChar==false && wantNumbers==true && wantRegularText==true) {
      choices = number.concat(alpha);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==true && wantRegularText==true) {
      choices = (alpha);
    } 
  
    else if (wantCaps==true && wantSpecialChar==false && wantNumbers==false && wantRegularText==false) {
      choices = (alpha2);
    } 
  
    else if (wantCaps==true && wantSpecialChar==true && wantNumbers==false && wantRegularText==false) {
      choices = character.concat(alpha2);
    } 
  
    else if (wantCaps==true && wantSpecialChar==true && wantNumbers==true && wantRegularText==false) {
      choices = character.concat(alpha2, number);
    } 
  
    else if (wantCaps==true && wantSpecialChar==false && wantNumbers==false && wantRegularText==true) {
      choices = alpha2.concat(alpha);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==false && wantRegularText==false) {
      choices = (character);
    } 
  
    else if (wantCaps==false && wantSpecialChar==false && wantNumbers==true && wantRegularText==false) {
      choices = (numbers);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==true && wantRegularText==false) {
      choices = character.concat(number);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==false && wantRegularText==true) {
      choices = character.concat(alpha);
    } 
  
    else if (wantCaps==true && wantSpecialChar==false && wantNumbers==true && wantRegularText==false) {
      choices = alpha2.concat(number);
    } 
  
    else if (wantCaps==false && wantSpecialChar==true && wantNumbers==false && wantRegularText==false) {
      choices = (character);
    } 
    
    else if (wantCaps==false && wantSpecialChar==false && wantNumbers==false && wantRegularText==false) {
      choices = alert("You need to pick atleast one trait!");
    } 
  } 
  
  else if (!(charNum >= 8 && charNum < 128)) { 
    choices = alert("You must enter a number between 8 and 128!")};
   
  var string = customPassword();


  console.log(password);
  console.log(charNum);
  return password;
};

generateBtn.addEventListener("click", writePassword);




