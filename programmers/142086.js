function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    const sliceWord = s.slice(0, i + 1).split("");
    const check = sliceWord.reduce((acc, cur, index) => {
      if (cur === s[i]) {
        return [...acc, index];
      }
      return acc;
    }, []);

    if (check.length === 1) {
      answer.push(-1);
    } else {
      answer.push(check[check.length - 1] - check[check.length - 2]);
    }
  }
  return answer;
}
