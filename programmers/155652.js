function solution(s, skip, index) {
  const alpha = new Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97))
    .filter((item) => !skip.includes(item));
  const target = s.split("").reduce((acc, cur) => {
    const currIdx = alpha.indexOf(cur);
    const maxLengthAlpha = alpha.length;
    const moveIdx = currIdx + index;
    if (moveIdx >= maxLengthAlpha) {
      return [...acc, alpha[parseInt(moveIdx % maxLengthAlpha)]];
    }

    return [...acc, alpha[moveIdx]];
  }, []);

  return target.join("");
}
