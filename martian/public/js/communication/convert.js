const textToHex = ({ key }) => key.charCodeAt(0).toString(16);

const hexToText = (hexValue) => {
  let txt = ``;
  for (let i = 0; i + 2 <= hexValue.length; i += 2) {
    txt += String.fromCharCode(`0x${hexValue.slice(i, i + 2)}`.toString(16).toString(10));
  }
  return txt;
};

export { textToHex, hexToText };
