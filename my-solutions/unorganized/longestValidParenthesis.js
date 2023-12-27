// longestValidParenthesis;
//     statement: find the length of the longest valid parentheses sequence
//     description: This problem requires finding the length of the longest valid parentheses sequence in a given string of parentheses
//     inputExample: ((()))()

export function longestValidParenthesis(str) {
  const stack = new Stack();
  stack.push(-1);
  let longestLength = 0;
  for (let i = 0; i < str.length; i++) {
    const val = str.charAt(i);
    console.log(val);
    if (val === '(') {
      stack.push(i);
    } else {
      // val == )
      stack.pop();
      if (stack.isEmpty()) {
        stack.push(i);
      } else {
        const index = stack.peek();
        const length = i - index; // difference is distance
        if (length > longestLength) {
          longestLength = length;
        }
      }
    }
  }
  return longestLength;
}

class Stack {
  constructor() {
    this.stack = [];
  }

  push(n) {
    this.stack.push(n);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.splice(this.stack.length - 1, 1);
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
