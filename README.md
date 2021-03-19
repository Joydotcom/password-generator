# password-generator

// Assignment Code
var generateBtn = document.querySelector("#generate");
// array of all lowercase letters
// array of all uppercase letters
// array of all numbers
// array of all special characters
var num = [1,2,3];
var lower_letters = [a,b,c];
var all_letters=[];
function generatePassword(){
  var password = "";
  // prompt user for length of password (number of characters)
  // if the length is less than 8 or greater than 128 
  // alert the user that the password must be between 8 and 128 characters
  // return empty string
  // confirm lowercase
  all_letters = all_letters.concat(lower_letters)
  // confirm uppercase
  // confirm numeric
  all_letters = all_letters.concat(num)
  // confirm special characters
  all_letters = [a,b,c,1,2,3]
  // if all of them are false
  // alert the user that at least one needs to be true
  // loop from 0 to number of characters
  // pick a rendom number between 0 and the length of all_letters
  // that random number represents an index in all_letters
  // e.g.  rand_num = 0  
  // append all_letters[0] to password
  // password = "a"
  // next of the iteration of the loop
  // rand_num = 5;
  // append all_letters[5] to password
  // password = "a3"
  //set the value of the password vairable based on criteria./
  return passsword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);