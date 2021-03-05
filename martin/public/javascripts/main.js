import { _ } from './util.js';
import { hexToString, stringToHex } from './conversion.js';
import { rotateArrow } from './spanArrow.js';

const transceiver = _.$(".transceiver");
const sendInfo = _.$('.sendInfo');
const arrowImg = _.$(".arrowImg");
const sendBtn = _.$(".sendBtn");

transceiver.addEventListener("input", function({target}) {
    sendInfo.value = hexToString(target.value);
})

sendInfo.addEventListener("input", function({target}) {
    transceiver.value = stringToHex(target.value);
    
    // arrowImg.style.WebkitTransform =`rotate(${degree}deg) scale(0.1)`
})
sendBtn.addEventListener("click", function(){
    // transceiver.value.split("").map(function (v) {
    //     // setTimeout(() => rotateArrow(v),1000)
    //     let timer = setTimeout(function print() {
    //         console.log(v)
    //         timer = setTimeout(print,1000)
    //     },1000)
    // })

    let arr = transceiver.value.split("")
    for(let i = 0; i < arr.length; i++){
        StartClock(i, arr)
        // setInterval(console.log(arr[i]),1000)

        // let timer = setTimeout(function print() {
        //     console.log(arr[i])
        //     timer = setTimeout(print,1000)
        // }, 1000)
    }
})

function StartClock(i, arr) {
    if (i <= arr.length){
        StartClock = setTimeout(StartClock(i+1),1000);
    }
    console.log(arr[i])
}
// let count = 5
// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   count -= 1;
//   if(count > 0) {timerId = setTimeout(tick, 1000);}
// }, 1000);