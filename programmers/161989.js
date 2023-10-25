function solution(n, m, section) {
  if (section.length === 1) {
    return 1;
  }
  let count = 0;
  let lastRange = 0;
  section.forEach((range) => {
    if (lastRange < range) {
      count++;
      lastRange = range + m - 1;
    }
  });

  return count;
}
