function minMaxFinder(input) {
  const sorted = input.sort((a, b) => {
    return a - b;
  });
  return [sorted[0], sorted[sorted.length - 1]];
}
