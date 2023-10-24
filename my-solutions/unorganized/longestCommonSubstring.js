//     statement: find the length of the longest common substring
//     description: This problem requires finding the length of the longest common substring between two strings
//     inputExample: The input strings are 'ABCDGH' and 'AEDFHR'

// substring is not subsequence
// so we would reset whenever we find non contiguous
export function longestCommonSubstring(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return 0;
  const matrix = new Array(s1.length + 1);
  let longest = '';
  for (let i = 0; i <= s1.length; i++) {
    matrix[i] = new Array(s2.length + 1).fill('');
  }

  for (let i = 1; i <= s1.length; i++) {
    const a = s1.charAt(i - 1); // because we start matrix at 1, as 0 is base case
    // but we start string at 0
    for (let j = 1; j <= s2.length; j++) {
      const b = s2.charAt(j - 1);
      if (a === b) {
        matrix[i][j] = matrix[i - 1][j - 1] + b;
        // longest = Math.max(longest.length, matrix[i][j].length);
        longest = longest.length > matrix[i][j].length ? longest : matrix[i][j];
      } else {
        // reset, since substring is a sequence and cant be interrupted
        matrix[i][j] = '';
      }
    }
  }
  console.log(matrix);
  console.log(longest);
  return longest.length;
}
