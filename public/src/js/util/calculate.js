import { go, pipe } from './util.js';

//prettier-ignore
export const hexCode = {
  10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E',15: 'F',
  A:10, B:11, C:12, D:13, E:14, F:15
};
export const hexCodeArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const BLANK = ' ';

const charToDec = (char) => char.charCodeAt();
const decToChar = (code) => String.fromCharCode(code);

const decToHex = (dec) => {
  let hex = '';
  while (dec) {
    const mod = dec % 16;
    hex = mod > 10 ? hexCode[mod] + hex : mod + hex;
    dec = Math.floor(dec / 16);
  }
  return hex;
};
const hexToDec = (hex) => {
  let dec = (hex + '')
    .split('')
    .reverse()
    .reduce((acc, cur, idx) => {
      acc += (isNaN(parseInt(cur)) ? hexCode[cur.toUpperCase()] : cur) * Math.pow(16, idx);
      return acc;
    }, 0);
  return dec;
};

const charToHex = pipe(charToDec, decToHex);
const hexToChar = pipe(hexToDec, decToChar);

export const stringToHexArr = (str) => str.split('').map((v) => charToHex(v));
export const hexArrToString = (arr) => arr.map((v) => hexToChar(v)).join('');
export const getHexIdx = (val) => {
  return hexCodeArr.indexOf(val);
};
