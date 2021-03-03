const hexadecimals = [...Array(10).keys(), "A", "B", "C", "D", "E", "F"];
const selectors = {
  arrow: document.querySelector(".roulette__arrow"),
  translatorButton: document.querySelector(".translate__button"),
  sentContentHex: document.querySelector(".sentContent__hex"),
  sendToEarthButton: document.querySelector(".sendContent__button"),
  receivedContentHex: document.querySelector(".receivedContent__hex"),
  receivedContentText: document.querySelector(".receivedContent__text"),
};

const rotateState = {
  currPoint: 0,
  currDeg: 15,
};

const times = {
  send: 2000,
  receive: 5000,
  transition: 300,
};

export { hexadecimals, selectors, rotateState, times };
