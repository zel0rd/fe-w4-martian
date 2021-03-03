const strToHex = (string) => {
  // 1. 문자를 10진수 아스키코드로
  // 2. 10진수를 16진수로
  // 3. 16진수 리턴
  const splitStrArr = string.split('');
  const hexCode = splitStrArr
    .map(char => char.charCodeAt())
    .map(decCode => Number(decCode).toString(16))
    .map(hex => hex.toUpperCase())
    .join(' ');
  return hexCode;
}

const hexToStr = (hexString) => {
  // 1. 16진수를 10진수로
  // 2. 10진수 아스키코드를 문자로
  // 3. 문자 리턴
  const splitHexStr = hexString.split(' ');
  const convertedStr = splitHexStr
    .map(hexCode => parseInt(hexCode, 16))
    .map(dec => String.fromCharCode(dec))
    .join('');
  return convertedStr;
}

export { strToHex, hexToStr }