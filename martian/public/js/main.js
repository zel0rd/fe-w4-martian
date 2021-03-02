import { communicate } from "./sender/convert.js";

// const receivedContent = document.querySelector(".receivedContent");
const translatorButton = document.querySelector(".translate__button");
const sentContentHex = document.querySelector(".sentContent__hex");
// const sentContentText = document.querySelector(".sentContent__text");
// text도 화면에 보여주기??
const sendToEarthButton = document.querySelector(".sendContent__button");
const receivedContentHex = document.querySelector(".receivedContent__hex");
const receivedContentText = document.querySelector(".receivedContent__text");

// translatorButton.addEventListener("click", () => {
//   console.log(receivedContent.value);
// });

// const sendToEarthButton = document.querySelector(".translate__send");
const senders = { sentContentHex, sendToEarthButton };
const receivers = { receivedContentHex, translatorButton, receivedContentText };

communicate(senders, receivers);

// sendToEarthButton.addEventListener("click", () => {
//   if (content) receivedContent.innerText = content;
// });
