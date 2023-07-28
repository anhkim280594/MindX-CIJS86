function isPalindrome(input) {
  function reverse(input) {
    return input.split('').reverse().join('');
  }
  let formattedString = input.replace(/\s/g, '').toLowerCase();
  return formattedString === reverse(formattedString);
}

isPalindrome(input)