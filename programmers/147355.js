function solution(t, p) {
  var answer = 0;
  const targetLength = p.length;
  for (let i = 0; i < t.length + 1 - targetLength; i++) {
    const spliceWord = t.slice(i, i + targetLength);

    if (spliceWord <= p) {
      answer++;
    }
  }
  return answer;
}
