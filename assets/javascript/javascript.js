var wantNumbers;
var wantSpecialChar;
var wantCaps;
var charNum;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[","]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

function customPassword() {
  for (var i = 0; i < charNum; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
  }
  document.querySelector("#password").value=password;
};


function generatePassword() {
  
  var charNum = prompt("enter the length of password");
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
  } else if (caps=="no") {
    var wantNumbers = false;
  };
  console.log(wantSpecialChar);
  console.log(wantCaps);
  console.log(wantNumbers);

  if (wantCaps==true && wantSpecialChar==true && wantNumbers==true) {
    choices = character.concat(number,alpha,alpha2);
  } 
  
  else if (wantCaps==false && wantSpecialChar==true && wantNumbers==true) {
    choices = character.concat(numbers,alpha);
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
  
  var password = "";
  
  customPassword();


  console.log(password);
  console.log(charNum);
};

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", writePassword);




