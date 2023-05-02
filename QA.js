/

// 2-savol k-mean value
{
  let s = [2, 3, 5]; // (4 + 9 + 25) // 38
  let coordinate = {
    c1: [3, 2, 4], // [1,1,1] = (1+1+1) = 3
    c2: [1, 2, 2], // [1,1,2] = (1+1+4) = 6
    c3: [7, 4, 1], // [5,2,3] = (25+4+9) = 38
    c4: [2, 2, 2], // [0,1,3] = (0, 1, 9) = 10
  };

  const calclulate = (coordinate, s) => {};
  calclulate(coordinate, s);
  // task
  // 1. s va coordinatalar orasidagi mafosalarni hisoblang.
  // 2. s yigini va coordinatalar yigindisidan hosil bo'lgan s va coordinate yigindilarini hisoblang.
}

// 3-savol o'rta arifmetikni toping
{
  let coordinate = {
    c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
    c2: [1, 2, 2], // [1,4,4] = (9) = 3
    c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
    c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
  };
  //   res (5.1 + 3 + 8.4 + 3.3)/4

  const mean = (coordinate) => {
    // ...
  };
  mean(coordinate);
  //
}

// 4 - savol sort
{
  let title = "webbrain academy";
  // task
  // textni alphabet tarzda joylashtirish kerak.
  // sort filter dan foydalanilmasin.
  // bosh joylar chiqarib yuborilsin
  // javob
  //   title = "aaabbcdeeimnrwy";
}
