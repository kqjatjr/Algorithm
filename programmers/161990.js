function solution(wallpaper) {
  const range = {
    startX: 51,
    startY: 51,
    endX: 0,
    endY: 0,
  };
  wallpaper.forEach((item, indexX) => {
    item.split("").forEach((paper, indexY) => {
      if (paper === "#") {
        if (range.startX > indexX) {
          range.startX = indexX;
        }

        if (range.startY > indexY) {
          range.startY = indexY;
        }

        if (range.endX <= indexX) {
          range.endX = indexX + 1;
        }

        if (range.endY <= indexY) {
          range.endY = indexY + 1;
        }
      }
    });
  });

  return [range.startX, range.startY, range.endX, range.endY];
}
