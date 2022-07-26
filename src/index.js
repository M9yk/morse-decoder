const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let i = 0;
  let number = 0;
  let x = 0;
  let decodeKey = "";
  let morseArr = [];
  let sentens = "";
  let morseLetter = 0;
  let symbol = "";
  while (i < expr.length) {
    morseLetter = expr.slice(i, i + 10);
    morseArr.push(morseLetter);
    morseLetter = 0;
    i += 10;
  }
  for (item of morseArr) {
    x = item;
    let i = 0;
    if (x === "**********") {
      sentens += " ";
    } else {
      while (x[i] !== "1") {
        i++;
      }
      x = x.slice(i, x.length);
      let z = 0;
      while (z < x.length) {
        if (x.slice(z, z + 2) === "11") {
          decodeKey += "-";
        } else {
          decodeKey += ".";
        }
        z += 2;
      }
      sentens += MORSE_TABLE[decodeKey];

      decodeKey = "";
    }
  }
  return sentens;
}

console.log(
  decode(
    "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
  )
);

module.exports = {
  decode,
};
