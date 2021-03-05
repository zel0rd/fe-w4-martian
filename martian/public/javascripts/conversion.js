const hexToString = (hex) => {
  return hex.split(/(\w\w)/g)
            .filter(p => !!p)
            .map(c => String.fromCharCode(parseInt(c, 16)))
            .join("")
            .replace(" ","");
}

const stringToHex = (str) => {
  return str.split("")
            .map((v) => v.charCodeAt(0).toString(16))
            .join("");
}

export { hexToString, stringToHex}


