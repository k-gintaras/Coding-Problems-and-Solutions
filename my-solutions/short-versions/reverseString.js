function reverseString(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    const letter = input[i];
    reversed += letter;
  }
  return reversed;
}
