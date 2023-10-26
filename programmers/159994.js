function solution(cards1, cards2, goal) {
  let answer = "Yes";
  goal.forEach((item) => {
    if (cards1[0] === item) {
      cards1.shift();
    } else if (cards2[0] === item) {
      cards2.shift();
    } else if (cards1[0] !== item && cards2[0] !== item) {
      answer = "No";
    }
  });
  return answer;
}
