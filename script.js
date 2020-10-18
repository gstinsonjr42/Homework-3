// Assignment Code
var generateBtn = document.querySelector("#generate");

//generate password function
function generatePassword(){
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var length = prompt('How long would you like this password to be?')
    var numbers = ['0','1','2','3','4','5','6','7','8','9']
    var specialChars =['!','@','#','$','%','^','&','*','(',')','?','<','>','-']
    var nums = confirm('Do you want numbers in your password?')
    var lcConfirm = confirm('Do you want lowercase letters in your password?')
    var ucConfirm = confirm('Do you want uppercase letters in your password?')
    var scConfirm = confirm('Do you want special characters in your password?')
    var passArray = upperCase

    if (lcConfirm){
        passArray = passArray.concat(lowerCase)
    }
    if(nums){
        passArray = passArray.concat(numbers)
    }
    if(scConfirm){
        passArray = passArray.concat(specialChars)
    }

    for (var i =1; i <= length; i++){
        console.log(passArray[Math.floor(Math.random() * passArray.length)])
    }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);