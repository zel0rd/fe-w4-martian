import { MyPromise } from "./myPromise";
import { draw } from "./canvas";
import { str2hex, hex2str } from "./send";
const { log } = console;

const init = () => {
    draw();
    hex2str()
};
init();


/*Mypromise Test

console.log('start');
new MyPromise("Hello ", 1)
    .then(v => v + "World! ")
    .then(v => v + "this is swing")
    .then(console.log);
console.log('end');

console.log(hex2str(arr))

*/