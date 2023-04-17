// statement: check if a string is a palindrome
// description: A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
// inputExample: racecar

// if reverse is same as original, then it is a palindrome
// also if half of it is equals reversed half
// if uneven, then ignore center
// i dont know of the top of head if there is option to simply reverse string so
// to reverse you can read backwards
// you can even stop in between if a single char not equals
export function isPalindrome(str) {
  for (let i = 0; i < str.length; i++) {
    const a = str[i];
    const b = str[str.length - 1 - i];
    if (a != b) {
      return false;
    }
  }
  return true;
}
