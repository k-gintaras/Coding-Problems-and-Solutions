// minStepsToEqualStrings;
//     statement: find the minimum number of steps to transform one string to another
//     description: Given two strings, find the minimum number of steps required to transform one string to another
//  A step consists of replacing one character with another character, deleting a character, or inserting a character
//
//     inputExample: String 1: 'cat' String 2: 'dog'

export function minStepsToEqualStrings(s1, s2) {
  const rows = s1.length;
  const cols = s2.length;

  // 1 item larger to allow checking previous
  const matrix = [];
  for (let i = 0; i <= rows; i++) {
    matrix.push(new Array(cols + 1).fill(0));
  }

  // set default values, where we have to replace all from s1 or s2
  // which would be either first row or column
  for (let i = 1; i <= rows; i++) {
    matrix[i][0] = i;
  }
  for (let i = 1; i <= cols; i++) {
    matrix[0][i] = i;
  }

  // ignore first iterations as those are base case
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      const above = matrix[i - 1][j];
      const left = matrix[i][j - 1];
      const behind = matrix[i - 1][j - 1];
      let cost = s1.charAt(i - 1) === s2.charAt(j - 1) ? 0 : 1;
      matrix[i][j] = Math.min(above + 1, left + 1, behind + cost);
    }
  }
  return matrix[rows][cols];
}
