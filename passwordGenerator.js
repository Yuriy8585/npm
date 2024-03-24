const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digits = '0123456789';
const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

function generatePassword(length, useSpecialCharacters = false) {
  const charSet =
    lowerCaseLetters +
    upperCaseLetters +
    digits +
    (useSpecialCharacters ? specialCharacters : '');

  let password = '';
  for (let i = 0; i < length; i++) {
    password += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return password;
}