// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var num = ["01234567789"];
var char = ["!@#$%^&*()"];


all_chars = ["0123456789ABCDEFGHIJKLMONOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"];




function generatePassword() {
  var all_chars = [];

var passwordLength = window.prompt("Choose the length of your password between 8 and 128 characters.");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128){
  alert(("Password length must be BETWEEN 8 and 128 characters. "))
  return ("");
}



var uppercaseChoice = window.confirm("Will your password include uppercase letters?");
console.log(uppercaseChoice);

if (uppercase) {
  all_chars = all_chars.concat(uppercase)
}
var lowercaseChoice = window.confirm("Will your password include lowercase letters?");
console.log(lowercaseChoice);

all_chars = all_chars.concat(lowercase);

var numChoice = window.confirm("Will your password include numbers?");
console.log(numChoice);
all_chars = all_chars.concat(num)

var charChoice = window.confirm("Will your password include special characters?");
console.log(charChoice);
all_chars = all_chars.concat(char);


if (all_chars.length === 0) {
alert("You need at least one character ")
return generatePassword ();
}
  for (var i = 0; i < passwordLength; i++) {
    var all_chars = math.floor(math.random() * all_chars.length);
    console.log(all_chars)
      
      var randomChar = (all_chars[randomIndex]);
      console.log(randomChar)
      finalpass += randomChar
  
 return password () 
}

// 
}
// if(passwordLength < 8 || passwordLength > 128) {
//   window.alert("Length of password must be at least 8 characters long, but not exceeding 128 characters.");

// }

// function generatePassword() {
//   // Asks for user input
//   enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
//   // First if statement for user validation 
//   if (!enter) {
//       alert("This needs a value");
//   } else if (enter < 8 || enter > 128) {
//       // Validates user input
//       // Start user input prompts
//       enter = parseInt(prompt("You must choose between 8 and 128"));

//   } else {
//       // Continues once user input is validated
//       confirmNumber = confirm("Will this contain numbers?");
//       confirmCharacter = confirm("Will this contain special characters?");
//       confirmUppercase = confirm("Will this contain Uppercase letters?");
//       confirmLowercase = confirm("Will this contain Lowercase letters?");
//  

// (int)(Math.random() * 72) };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button  
  generateBtn.addEventListener("click", writePassword);
