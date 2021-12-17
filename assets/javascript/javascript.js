var wantNumbers;
var wantSpecialChar;
var wantCaps;
var charNum;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[","]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

password = [];

var choices;

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
  console.log(charNum);
  
  var passwordText = password.join("");
  document.querySelector("#password").textContent= password.toString();
  return passwordText;
};


function generatePassword() {
  
  charNum = prompt("enter the length of password");
  if (!(charNum >= 8 && charNum < 128)) {};
  
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
  } else if (numbers=="no") {
    var wantNumbers = false;
  };
  console.log(wantSpecialChar);
  console.log(wantCaps);
  console.log(wantNumbers);

  if (wantCaps==true && wantSpecialChar==true && wantNumbers==true) {
    choices = character.concat(number,alpha,alpha2);
  } 
  
  else if (wantCaps==false && wantSpecialChar==true && wantNumbers==true) {
    choices = character.concat(number,alpha);
  } 
  
  else if (wantCaps==false && wantSpecialChar==false && wantNumbers==true) {
    choices = number.concat(alpha);
  }

  else if (wantCaps==false && wantSpecialChar==false && wantNumbers==false) {
    choices = (alpha);
  }

  else if (wantCaps==false && wantSpecialChar==true && wantNumbers==false) {
    choices = character.concat(alpha);
  }

  else if (wantCaps==true && wantSpecialChar==true && wantNumbers==false) {
    choices = character.concat(alpha,alpha2);
  };
  
  var string = customPassword();


  console.log(password);
  console.log(charNum);
  return password;
};

generateBtn.addEventListener("click", writePassword);




