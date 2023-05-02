//     statement: find the longest substring without repeating characters
//     description: This problem requires finding the longest substring in a given string without any repeating characters
//     inputExample: abcabcbb

export function longestNonRepeatingString(str) {
  let largest = '';
  let seen = '';

  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    // if we havent seen it yet
    if (seen.indexOf(c) < 0) {
      seen += c;
      if (largest.length < seen.length) {
        largest = seen;
      }
    } else {
      i -= seen.length; // start over
      seen = '';
    }
  }
  return largest;
}
