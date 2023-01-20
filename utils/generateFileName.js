var sixtyChars = new Array(
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x"
);
const decToSex = (num) => {
  var extract = num.toString().split(".");
  num = extract[0];
  var pieces = new Array();
  do {
    pieces.push(sixtyChars[num % 60]);
    num = parseInt(num / 60);
  } while (num > 0);
  pieces = pieces.reverse();
  var rem = extract[1];
  if (rem) {
    rem = parseFloat("." + rem);
    var x = 0;
    var dec = new Array();
    do {
      x++;
      var res = (rem * 60).toString().split(".");
      dec.push(sixtyChars[res[0]]);
      if (res[1]) {
        rem = parseFloat("." + res[1]);
      } else {
        break;
      }
    } while (x < 3); // work up to 3 decimal places, change for more.
  }
  var myResult = pieces.join("");
  if (dec) {
    myResult += "." + dec.join("");
  }
  return myResult;
};
const generateFileName = () => {
  const todayDate = Date.now();
  const newUniqueFileName = decToSex(todayDate);
  return newUniqueFileName;
};

export default generateFileName;
