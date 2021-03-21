// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var char = ["!", "@", "#", "$", "%", "^","&", "*", "(", ")"];
var choices = [];

var all_chars = ["0123456789ABCDEFGHIJKLMONOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()"
];

function generatePassword() {

  var passwordLength = window.prompt("Choose the length of your password between 8 and 128 characters.");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128){
    alert(("Password length must be BETWEEN 8 and 128 characters. "))
    return ("");
  }

  var uppercaseChoice = window.confirm(
    "Will your password include uppercase letters?"
  );
  console.log(uppercaseChoice);

  if (uppercase) {
    all_chars = all_chars.concat(uppercase);
  }
  var lowercaseChoice = window.confirm(
    "Will your password include lowercase letters?"
  );
  console.log(lowercaseChoice);

  all_chars = all_chars.concat(lowercase);

  var numChoice = window.confirm(
    "Will your password include numbers?" 
    );
  console.log(numChoice);

  all_chars = all_chars.concat(num);

  var charChoice = window.confirm(
    "Will your password include special characters?"
  );
  console.log(charChoice);
  all_chars = all_chars.concat(char);

  if (all_chars.length === 0) {
    alert("You need at least one character ");
//  return ();
    }

   
  for (var i = 0; i < passwordLength; i++) {
    var choices = choices[Math.floor(Math.random() * all_chars.length)];
    passwordLength.push(choices);
console.log(choices)
      var randomChar = (all_chars[randomIndex]);
      console.log(randomChar)
      finalpass += randomChar

    // return password();
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


