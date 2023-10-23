function solution(park, routes) {
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };
  const maxWidth = park.length - 1;
  const maxHeight = park[0].length - 1;
  let dog = {
    width: 0,
    height: 0,
  };
  const parkList = [];
  park.forEach((row, idx) => {
    const sPos = row.indexOf("S");
    if (sPos >= 0) {
      dog.width = idx;
      dog.height = sPos;
    }
    parkList.push([...row]);
  });

  routes.forEach((route, index) => {
    const [dic, range] = route.split(" ");
    const tempDog = { ...dog };
    let flag = true;

    for (let i = 0; i < range; i++) {
      tempDog.width += dict[dic][0];
      tempDog.height += dict[dic][1];

      if (
        tempDog.width > maxWidth ||
        tempDog.width < 0 ||
        tempDog.height > maxHeight ||
        tempDog.height < 0
      ) {
        flag = false;
        break;
      }

      if (parkList[tempDog.width][tempDog.height] === "X") {
        flag = false;
        break;
      }
    }

    if (flag) {
      dog = { ...tempDog };
    }
  });

  return [dog.width, dog.height];
}
