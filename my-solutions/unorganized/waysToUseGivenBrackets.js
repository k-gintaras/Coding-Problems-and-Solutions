//     statement: find the number of valid parentheses combinations
//     description: Given a number n, find the total number of valid parentheses combinations that can be formed with n pairs of parentheses
//
//     inputExample: Integer n

// also look into Catalan numbers, they are also used to calculate number of trees in binary tree
// (2n)!/ ((n+1)!*n!);

export function catalanBracketCount(n) {
  const a = factorial(2 * n);
  const b = factorial(n + 1) * factorial(n);
  return a / b;
}

export function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

export function waysToUseGivenBrackets(n) {
  let open = n;
  let close = n;
  let str = '';
  return waysToArrangeBrackets(n, str, open, close);
}

function waysToArrangeBrackets(n, str, open, close) {
  let count = 0;
  if (close === 0) {
    // we finally closed the loop, so we can return one of our ways
    console.log(count + ': ' + open + '+' + close + '= ' + str);
    count++;
    //return 1;
  }
  const spentOpen = n - open;
  const spentClose = n - close;
  const canClose = spentOpen > spentClose;

  if (canClose) {
    // can open and close
    if (open > 0) {
      count += waysToArrangeBrackets(n, str + '(', open - 1, close);
    }
    count += waysToArrangeBrackets(n, str + ')', open, close - 1);
  } else {
    // can only open
    if (open > 0) {
      count += waysToArrangeBrackets(n, str + '(', open - 1, close);
    }
  }
  return count;
}
