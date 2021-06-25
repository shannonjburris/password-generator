var Special = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];
// Array of numeric characters to be included in password
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Array of lowercase characters to be included in password
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
// Array of uppercase characters to be included in password
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
//I am going to store final values here
var finalVar;

function generatePassword() {
  var final = [];
  finalVar = ''; //empty variable each time password is generated

  var passwordLength = prompt("Enter length of password");
  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a number between 8 & 128');
    return;
  }
  else {
    //check if special characters included
    var hasSpecialCharacter = confirm("Click ok to confirm special characters in your password");
    
    var hasNumbers = confirm("Click ok to confirm including numbers.");

    var hasLowerCase = confirm("Click ok to confirm including lower case.");

    var hasUpperCase = confirm("Click ok to confirm including upper case.");

    if (hasSpecialCharacter) {
      final = final.concat(Special);
    }
    if (hasNumbers) {
      final = final.concat(Numbers)
    }
    if (hasLowerCase) {
      final = final.concat(lowerCase)
    }
    else if (hasUpperCase) {
      final = final.concat(upperCase)
    }

    for (i = 0; i < passwordLength; i++) {
      var randomIndexValue = final[Math.floor(Math.random() * final.length)];
      finalVar += randomIndexValue;

    }
  }

}



//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
