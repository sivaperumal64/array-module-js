function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str.toLowerCase() === reversedStr.toLowerCase();
}

console.log(isPalindrome("peace")); 
console.log(isPalindrome("malayalam")); 