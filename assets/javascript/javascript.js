var alphabet = "abcdefghijklmnopqrstuvwxyz";
var capAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+?.";
var generateBtn = document.querySelector("#generate");

function writePassword() {

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
    //   var characters = alpha;
      
      var charNum = prompt("enter the length of password");
      if (!(charNum >= 8 && charNum < 128)) {}
      
      var specialChar = prompt("do you want special characters?");
      if (!(specialChar !="yes" || specialChar !="no")) {}
      
      var caps = prompt("do you want uppercase characters?");
      if (!(caps !="yes" && caps !="no")) {}
      
      var lowerCaps = prompt("do you want lowercase characters?");
      if (lowerCaps =="yes" || lowerCaps =="no") {}
      
      var password = "";
      for (let i = 0; i < length; i++) {
          password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
};

generateBtn.addEventListener("click", writePassword);





