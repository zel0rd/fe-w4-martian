import { _ } from './util.js';
import { hexToString, stringToHex } from './conversion.js';
import { getArrowDeg } from './spanArrow.js';
import { disableInputBox, enableInputBox } from './disable.js';

const transceiver = _.$(".transceiver");
const sendInfo = _.$('.sendInfo');
const arrowImg = _.$(".arrowImg");
const transBtn = _.$(".transBtn");
const sendBtn = _.$(".sendBtn");

transceiver.addEventListener("input", function({target}) {
    //sendInfo.value = hexToString(target.value);
})

sendInfo.addEventListener("input", function({target}) {
    //transceiver.value = stringToHex(target.value);
})

transBtn.addEventListener("click", function(){
    disableInputBox()
    sendInfo.value = "";
    let arr = transceiver.value.split("")
    let index = 0;
    let timerId = setTimeout(function tick() {
        arrowImg.style.WebkitTransform = `rotate(${getArrowDeg(arr[index])}deg) scale(0.1)`
        index += 1;
        setTimeout(function() {
            arrowImg.classList.toggle("arrowImgBlink")
        }, 1000)
        setTimeout(function() {
            arrowImg.classList.toggle("arrowImgBlink")
        }, 2000)
        sendInfo.value = hexToString(transceiver.value.slice(0,index))
        if(index < arr.length) {timerId = setTimeout(tick,3000)}
        else {
            enableInputBox()
        }
    })
})

sendBtn.addEventListener("click", function(){
    disableInputBox()
    transceiver.value = "";
    let arr = stringToHex(sendInfo.value)
    let index = 0;
    console.log(arr)
    let timerId = setTimeout(function tick() {
        arrowImg.style.WebkitTransform = `rotate(${getArrowDeg(arr[index])}deg) scale(0.1)`
        index += 1;
        setTimeout(function() {
            arrowImg.classList.toggle("arrowImgBlink")
        }, 1000)
        setTimeout(function() {
            arrowImg.classList.toggle("arrowImgBlink")
        }, 2000)
        transceiver.value = arr.slice(0,index);
        if(index < arr.length) {timerId = setTimeout(tick,3000)}
        else {
            enableInputBox()
        }
    })
})