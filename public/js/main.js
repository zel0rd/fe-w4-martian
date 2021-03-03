import { MyPromise } from "./myPromise"

console.log('start');
new MyPromise("Hello ", 1)
    .then(v => v + "World! ")
    .then(v => v + "this is swing")
    .then(console.log);
console.log('end');