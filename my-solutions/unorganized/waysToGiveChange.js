//     statement: find the number of ways to make change for a given amount
//     description: Given an amount of money, there are a number of ways to make change using coins of different denominations
//  This problem is to find the total number of ways to make change for a given amount using coins of different denominations
//
//     inputExample: Given an amount of money, say 5, and coins of different denominations, say 1, 2, 3
//  The input would be 5 and [1,2,3]
//

export function countWaysToGiveCoin(cash, coins) {
  const matrix = [];
  const width = cash + 1;
  const height = coins.length + 1;
  for (let i = 0; i < height; i++) {
    const row = new Array(width).fill(0);
    row[0] = 1; // there is always one way of giving zero coins
    matrix.push(row);
  }
  for (let i = 1; i <= coins.length; i++) {
    const coin = coins[i - 1];
    for (let j = 0; j <= cash; j++) {
      const curCash = j;
      const previous = matrix[i][j - coin];
      const above = matrix[i - 1][j];

      // if you can fit it
      if (coin <= curCash) {
        matrix[i][j] = previous + above;
      } else {
        matrix[i][j] = above;
      }
    }
  }
  return matrix[matrix.length - 1][matrix[0].length - 1];
}

export function countWaysToGive(cash, coins) {
  const dp = new Array(cash + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i <= cash; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[cash];
}

export function waysToGiveTwo(cash, c1, c2) {
  let i = 0;
  let j = 0;
  let limit = Math.max(cash / c1, cash / c2);
  let ways = 0;
  while (i <= limit) {
    j = 0;
    while (j <= limit) {
      const sum = c1 * i + c2 * j;
      let remainder = cash % sum;
      if (remainder === 0) {
        const newVal = cash - sum;
        if (sum === cash) {
          // repeat...
          printResult(cash, i, c1, j, c2);
          ways++;
        } else {
          ways += waysToGiveTwo(newVal, c2);
        }
      }
      j++;
    }
    i++;
  }
  return ways;
}

function printResult(cash, i, c1, j, c2) {
  console.log(
    cash + ' is same as ' + i + 'x ' + c1 + 's and ' + j + 'x ' + c2 + 's'
  );
}

export function waysToGiveChange(cash, coinsArr) {
  //   let c1 = coinsArr[0];
  //   let c2 = coinsArr[1];
  //   let c3 = coinsArr[2];
  //   const ways1 = waysToGiveTwo(cash, c1, c2);
  //   const ways2 = waysToGiveTwo(cash, c1, c3);
  //   console.log(ways1);
  //   console.log(ways2);

  let ways = 0;
  for (let i = 0; i < coinsArr.length; i++) {
    const c1 = coinsArr[i];
    const c2 = coinsArr[i + 1];
    ways += waysToGiveTwo(cash, c1, c2);
  }
  console.log(ways + 1);
  //   let c1 = coinsArr[0];
  //   let c2 = coinsArr[1];
  //   let i = 0;
  //   let j = 0;
  //   let limit = Math.max(cash / c1, cash / c2);

  //   while (i <= limit) {
  //     j = 0;
  //     while (j <= limit) {
  //       const sum = c1 * i + c2 * j;
  //       let remainder = cash % sum;
  //       if (remainder === 0) {
  //         const newVal = (cash = sum);

  //         // repeat...
  //         console.log(
  //           cash + ' is same as ' + i + 'x ' + c1 + 's and ' + j + 'x ' + c2 + 's'
  //         );
  //       }
  //       j++;
  //     }
  //     i++;
  //   }

  //   const i = 0;
  //   const currentCoin = coinsArr[i];
  //   const remainder = cash % currentCoin;
  //   let ways = 0;
  //   if (remainder === 0) {
  //     ways++;
  //   } else {
  //     if (i < coinsArr.length) {
  //       const newReminder = (cash % currentCoin) + coinsArr[i + 1];
  //     }
  //   }

  //   let ways = 0;
  //   for (let i = 0; i < coinsArr.length; i++) {
  //     const coin = coinsArr[i];
  //     const remainder = cash & coin;
  //     if (remainder === 0) {
  //       ways++;
  //     } else {
  //     }
  //   }

  //   const remainderFirst = cash % coinsArr[0];
  //   if (remainderFirst === 0) {
  //     ways++;
  //   }
  //   const remainderSecond = cash % coinsArr[0];
  //   if (remainderSecond === 0) {
  //     ways++;
  //   }

  //   // lets say it is 5 remainder 2 == 1
  //     const r = cash % coinsArr[1];
  //     // check what coin can do it
  //     // 1
  //     if(remainder===1){
  //         // can finish with coin 1

  //     }
  //     cash-coin% coin
}
