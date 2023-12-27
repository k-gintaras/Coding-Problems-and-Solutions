//     statement: check if a string is a subsequence of another string
//     description: This problem involves determining whether a given string is a subsequence of another string
//
//     inputExample: Input: str1 = 'ABCD', str2 = 'AEDF'

export function isSubsequence(str1, str2) {
  // longest common subsequence basically
  // if the string is that subsequence, then it is in (kinda)
  // so we would be doing LCS up until that string ends and if length === it ?

  // fill the matrix with zeros, extra padding for base case
  if (str1.length === 0) return true; // set theory, empty set is a subset of a set and itself even
  // this will basically also check if s1 === 1 and s2 < 1 which is 0
  if (str2.length < str1.length) return false;
  const matrix = [];
  for (let i = 0; i < str2.length + 1; i++) {
    matrix.push(new Array(str1.length + 1).fill(0));
  }

  // we swap the string reading basically so we can faster reach the end
  // we read characters of long string i
  // we check each time with short string j
  // we stop if we find it early
  for (let i = 1; i <= str2.length; i++) {
    const c1 = str2.charAt(i - 1); // made mistake here, as i start from 1 due to base case in matrix, i should still include 0th character when i=1
    for (let j = 1; j <= str1.length; j++) {
      const c2 = str1.charAt(j - 1); // made mistake here, as i start from 1 due to base case in matrix, i should still include 0th character when j=1
      // i dont remember if i always use matrix i-1 j-1
      // they are even, we increment with previous even
      if (c1 === c2) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        // they are different, we just get previously found max on either side
        matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
      }
      if (matrix[i][j] === str1.length) {
        // subsequence is of this length already found
        // dont need to look further
        return true;
      }
    }
  }
  return false;
}
