// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password function
function generatePassword(){
    var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var LowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var length = prompt('How long would you like this password to be?')
    var numbers = ['0','1','2','3','4','5','6','7','8','9']
    var specialChars =['!','@','#','$','%','^','&','*','(',')','?','<','>','-']
    var nums = confirm('Do you want numbers in your password?')
    var lcConfirm = confirm('Do you want lowercase letters in your password?')
    carucConfirm = confirm('Do you want uppercase letters in your password?')


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);