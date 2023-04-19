// statement: check if two strings are anagrams
// description: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once
// inputExample: 'listen', 'silent'
export function isAnagram(str1, str2) {
  // basically if you sort both, they should be the same
  // more interesting would be to check if each letter from word a exists in word b, but ultra slow and probably unnecessary
  str1 = str1.split('').sort().join('');
  str2 = str2.split('').sort().join('');
  return str1 === str2;
}
