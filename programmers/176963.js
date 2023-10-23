function solution(name, yearning, photo) {
  var answer = [];
  const yearnMap = {};

  for (let i = 0; i < name.length; i++) {
    yearnMap[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let count = 0;
    for (let j = 0; j < photo[i].length; j++) {
      count = yearnMap[photo[i][j]] ? count + yearnMap[photo[i][j]] : count;
    }
    answer.push(count);
  }
  return answer;
}
