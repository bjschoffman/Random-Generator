// Assignment code here
var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var potentialCharacters = "";

function generatePassword() {
  // User selects character criteria from window prompts 
  var characterLength = window.prompt("Choose password character length of between 8 and 128.");
  if (characterLength < 8 || characterLength > 128) {
    // Must select designated character length
    window.alert("The character length must be between 8 and 128.");
    characterLength = window.prompt("Choose a character length of between 8 and 128.");
  } 
  
  var lowerLetters = window.confirm("Would you like lowercase characters included in your password?");
  
  var upperLetters = window.confirm("Would you like uppercase characters included in your password?");
  
  var integers = window.confirm("Would you like number characters included in your password?");

  var special = window.confirm("Would you like special characters included in your password?");

  //Takes user's criteria and concatenates the strings
  if (lowerLetters) {
    potentialCharacters += lowercaseAlpha;
  }
  if (upperLetters) {
    potentialCharacters += uppercaseAlpha;
  }
  if (integers) {
    potentialCharacters += numbers;
  }
  if (special) {
    potentialCharacters += specialCharacters;
  }
  //To make sure that the user selects at least one criterion
  if (!lowerLetters && !upperLetters && !integers && !special) {
    window.alert("Please select at least one character type.");
  };
  // Blank string to allow for the random password generation
  let randomPassword = ""
  //Loops through the concatenated user's criteria and then generates a radom password
  for (let i = 0; i < characterLength; i++) {
    let mix = [Math.floor(Math.random() * potentialCharacters.length)];
    (randomPassword += potentialCharacters[mix]);
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
