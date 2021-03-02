import MyPromise from "../myPromise.js";

const isString = ({ keyCode }) => (keyCode >= 65 && keyCode <= 90) || keyCode === 32;

const textToHex = ({ key }) => {
  // console.log(key.charCodeAt(0));
  return key.charCodeAt(0).toString(16);
};

const hexToText = (hexValue) => {
  let txt = ``;
  for (let i = 0; i + 2 <= hexValue.length; i += 2) {
    txt += String.fromCharCode(`0x${hexValue.slice(i, i + 2)}`.toString(16).toString(10));
  }
  return txt;
};

const registerEvent = (type, element, ...fns) => {
  element.addEventListener(type, () => fns.forEach((fn) => fn()));
};

const send = (contents, receivedContent) => {
  contents.split("").forEach((letter, idx) => setTimeout(() => (receivedContent.value += letter), 500 * (idx + 1))); // 시간을 계속 지연시켜주기.. 바보.. 왜 이런걸로 삽질 ㅜㅜ
};

const communicate = (senders, receivers) => {
  const { sentContentHex, sendToEarthButton } = senders;
  const { receivedContentHex, translatorButton, receivedContentText } = receivers;
  let translatedWord = ``;

  sentContentHex.addEventListener("keydown", (e) => (isString(e) ? (translatedWord += textToHex(e)) : (translatedWord = sentContentHex.value)));
  sentContentHex.addEventListener("keyup", (e) => {
    isString(e) ? (sentContentHex.value = translatedWord) : sentContentHex.value;
    // console.log(e);
  });

  sendToEarthButton.addEventListener("click", () => {
    const contents = sentContentHex.value;
    send(contents, receivedContentHex);
    sentContentHex.value = ``;
    translatedWord = ``;
  });

  translatorButton.addEventListener("click", () => {
    // console.log(receivedContentHex.value);
    receivedContentText.innerText += `${hexToText(receivedContentHex.value)}\n`;
    receivedContentHex.value = ``;
  });
};

export { communicate };
