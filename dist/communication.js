const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const initCommunication = (buffer) => {
  rl.on("line", (line) => {
    buffer.push(...line);
  });

  return () => {
    const hexCode = buffer.shift()?.charCodeAt(0).toString(16).toUpperCase();
    return hexCode;
  }
}

module.exports = {
  initCommunication,
}