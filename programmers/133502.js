function solution(ingredient) {
  var answer = 0;
  const stack = [];

  ingredient.forEach((item) => {
    stack.push(item);
    const stackLength = stack.length;
    const isBurger =
      stack[stackLength - 4] === 1 &&
      stack[stackLength - 3] === 2 &&
      stack[stackLength - 2] === 3 &&
      stack[stackLength - 1] === 1;
    if (isBurger) {
      for (let i = 0; i < 4; i++) {
        stack.pop();
      }
      answer += 1;
    }
  });

  return answer;
}
