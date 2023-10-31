function reverseString(str) {
  return str.split("").reverse().join("");
}

function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    const count = Math.floor(food[i] / 2);
    if (count) {
      for (let j = 0; j < count; j++) {
        answer += i;
      }
    }
  }

  answer = answer + "0" + reverseString(answer);

  return answer;
}
