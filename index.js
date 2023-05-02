// 1 - MASALA YECHIMI:

let str = '+998 33 576 2020';

// Yechim:

function getPhoneNum (str) {
  let res = {};
  res.country = str.slice (0, 4);
  res.region = str.slice (5, 7);
  res.city = str.slice (8, 11);
  res.number = str.slice (12);
  return res;
}
// console.log (getPhoneNum (str));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2 - MASALA YECHIMI:

let s = [2, 3, 5]; // (4 + 9 + 25) // 38
let coordinate2 = {
  c1: [3, 2, 4], // [1,1,1] = (1+1+1) = 3
  c2: [1, 2, 2], // [1,1,2] = (1+1+4) = 6
  c3: [7, 4, 1], // [5,2,3] = (25+4+9) = 38
  c4: [2, 2, 2], // [0,1,3] = (0, 1, 9) = 10
};

const calclulate = (coordinate, s) => {
  let arr = Object.values (coordinate);

  let a1 = s[0] - arr[0][0];
  let a2 = s[1] - arr[0][1];
  let a3 = s[2] - arr[0][2];

  let arr1 = [a1, a2, a3]
    .map (value => Math.pow (value, 2))
    .reduce ((total, value) => total + value, 0);

  let b1 = s[0] - arr[1][0];
  let b2 = s[1] - arr[1][1];
  let b3 = s[2] - arr[1][2];

  let arr2 = [b1, b2, b3]
    .map (value => Math.pow (value, 2))
    .reduce ((total, value) => total + value, 0);

  let c1 = s[0] - arr[2][0];
  let c2 = s[1] - arr[2][1];
  let c3 = s[2] - arr[2][2];

  let arr3 = [c1, c2, c3]
    .map (value => Math.pow (value, 2))
    .reduce ((total, value) => total + value, 0);

  let d1 = s[0] - arr[3][0];
  let d2 = s[1] - arr[3][1];
  let d3 = s[2] - arr[3][2];

  let arr4 = [d1, d2, d3]
    .map (value => Math.pow (value, 2))
    .reduce ((total, value) => total + value, 0);

  return [arr1, arr2, arr3, arr4].reduce ((total, value) => total + value, 0);
};

// console.log (calclulate (coordinate2, s));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3 - MASALA YECHIMI:

// task
// textni alphabet tarzda joylashtirish kerak.
// sort filter dan foydalanilmasin.
// bosh joylar chiqarib yuborilsin

let coordinate = {
  c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
  c2: [1, 2, 2], // [1,4,4] = (9) = 3
  c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
  c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
};
//   res (5.1 + 3 + 8.4 + 3.3)/4

// Yechim:

const mean = coordinate => {
  let arr = Object.values (coordinate);

  let a = Math.sqrt (
    arr[0]
      .map (value => Math.pow (value, 2))
      .reduce ((total, value) => total + value)
  );
  let b = Math.sqrt (
    arr[1]
      .map (value => Math.pow (value, 2))
      .reduce ((total, value) => total + value)
  );
  let c = Math.sqrt (
    arr[2]
      .map (value => Math.pow (value, 2))
      .reduce ((total, value) => total + value)
  );
  let d = Math.sqrt (
    arr[3]
      .map (value => Math.pow (value, 2))
      .reduce ((total, value) => total + value)
  );

  let res = [a.toFixed (3), b.toFixed (3), c.toFixed (3), d.toFixed (3)];
  return eval (res.join ('+')) / res.length;
};

// console.log (mean (coordinate));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4 - savol sort

// task
// textni alphabet tarzda joylashtirish kerak.
// sort filter dan foydalanilmasin.
// bosh joylar chiqarib yuborilsin
// javob
// title = 'aaabbcdeeimnrwy';

let title = 'webbrain academy';

function getAlphatbet (str) {
  let res = ["a","b", "c", "d", "e", "i", "m", "n", "r", "w", "y"];
  for(v of )

}

console.log (getAlphatbet (title));
