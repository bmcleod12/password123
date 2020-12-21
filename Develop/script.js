// maps variable to html button
var generateBtn = document.querySelector("#generate");

// strings used to create password
var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharcters= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

// strings used in prompts
var promptMessageOne = "Select OK to include ";
var promptMessageTwo = " characters or Cancel to exclude them.";

// these functions collect user entries to build the password; invoked by writePassword > generatePassword functions

  // has the user set password length with validation
  function setPasswordLength() {
    console.log(pwLength);
    pwLength = "";  
    console.log(pwLength);
    var pwLength = prompt("Choose a password length between 8 and 128 characters.");

      // Checks to see if the password length is less than 8, greater than 128, or is not a number at all. If true, it alerts the user to enter a number and restarts the function.
      if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
          alert("Please enter a number between 8 and 128.");
          setPasswordLength()
      }
      
      console.log(pwLength);
    // sets the function equal to the number provided for reference in generatePassword function
    return pwLength
    console.log(pwLength);
  }   

  //has the user select whether to include lowercase characters in the password
  function checkLowercase() {
    var confirmLowercase = confirm(`${promptMessageOne}lowercase${promptMessageTwo}`);
    return confirmLowercase
  }

  //has the user select whether to include uppercase characters in the password
  function checkUppercase() {
    var confirmUpperCase = confirm(`${promptMessageOne}uppercase${promptMessageTwo}`);
    return confirmUpperCase
  }

  //has the user select whether to include numeric characters in the password
  function checkNumeric () {
    var confirmNumeric = confirm(`${promptMessageOne}numeric${promptMessageTwo}`);
    return confirmNumeric
  }

  //has the user select whether to include special characters in the password
  function checkSpecial () {
    var confirmSpecial= confirm(`${promptMessageOne}special${promptMessageTwo}`);
    return confirmSpecial
  }

      // if (confirmlowerCase && confirmUpperCase && confirmNumeric && confirmSpecial) {
      //   alert("wow");
      // }

function generatePassword () {
    var randomPassword = "";
    var pwLengthEntry = setPasswordLength();
    var lowerCaseOption = checkLowercase();
    var upperCaseOption = checkUppercase();
    var numericOption = checkNumeric();
    var specialOption = checkSpecial();

    if (lowerCaseOption === false && upperCaseOption === false && numericOption === false && specialOption === false) {
      alert("Please select at least one character type.");
      return
    }

    var finalSetofOptions = "";

    if (lowerCaseOption) {
      finalSetofOptions = finalSetofOptions.concat(lowercaseCharacters);
    }

    if (upperCaseOption) {
      finalSetofOptions = finalSetofOptions.concat(uppercaseCharcters);
    }

    if (numericOption) {
      finalSetofOptions = finalSetofOptions.concat(numberCharacters);
    }

    if (specialOption) {
      finalSetofOptions = finalSetofOptions.concat(specialCharacters);
    }

    for (var i = 0; i < pwLengthEntry; i++) {
      randomPassword += finalSetofOptions.charAt(Math.floor(Math.random() * finalSetofOptions.length));
    }
    return randomPassword;

}


// Write password to the #password input
 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


