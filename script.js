// Assignment code here
var numbers = "0123456789";
var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var potentialCharacters = "";

function generatePassword() {
  
  var characterLength = window.prompt()
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please choose a valid character length.");
    characterLength = window.prompt("Choose a character length of between 8 and 128.");
  } 
  
  var lowerLetters = window.confirm("");
  
  var upperLetters = window.confirm("Do you want uppercase characters?");
  
  var integers = window.confirm();

  var special = window.confirm();

  if (lowerLetters === false && upperLetters === false && integers === false && special === false) {
    window.alert("Please select at least one character type.");
  };

 
  if (lowerLetters) {
    potentialCharacters = potentialCharacters.concat(lowercaseAlpha);
  }
  if (upperLetters) {
    potentialCharacters = potentialCharacters.concat(uppercaseAlpha);
  }
  if (integers) {
    potentialCharacters = potentialCharacters.concat(numbers);
  }
  if (special) {
    potentialCharacters = potentialCharacters.concat(specialCharacters);
  }

  
  var randomPassword = ""
  
  for (var i = 0; i < characterLength; i++) {
    var mix = [Math.floor(Math.random() * potentialCharacters.length)];
    randomPassword = randomPassword + potentialCharacters[mix];
  }
  return randomPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
