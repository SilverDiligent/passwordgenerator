var generateBtn = document.querySelector('#generate')
// Generate password
function generatePassword() {
  var length = prompt(
    'Please enter a password length (must be between 8 and 128 characters).'
  )

  if (length < 8 || length > 128) {
    alert('Password length must be between 8 and 128 characters.')
    return ''
  }

  var generateBtn = document.querySelector('#generate')

  var useLowercase = confirm('Would you like to include lowercase letters?')
  var useUppercase = confirm('Would you like to include uppercase letters?')
  var useNumbers = confirm('Would you like to include numbers?')
  var useSpecialCharacters = confirm(
    'Would you like to include special characters?'
  )

  if (!useLowercase && !useUppercase && !useNumbers && !useSpecialCharacters) {
    alert('You must choose at least one character type for your password.')
    return ''
  }

  var charset = ''
  if (useLowercase) charset += 'abcdefghijklmnopqrstuvwxyz'
  if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  if (useNumbers) charset += '0123456789'
  if (useSpecialCharacters) charset += '!@#$%^&*()'

  var password = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector('#password')
  passwordText.value = password
}

// Rest of your code...

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword)
