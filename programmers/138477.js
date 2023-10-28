function solution(k, score) {
  let answer = [];
  const temp = [];
  for (let i = 0; i < score.length; i++) {
    temp.push(score[i]);
    temp.sort((a, b) => b - a);
    if (temp.length > k) {
      temp.pop();
    }
    answer.push(temp[temp.length - 1]);
  }

  return answer;
}
