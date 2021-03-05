
let count = 5
let arr = "123456".split("")
console.log(arr.toString());


let timerId = setTimeout(function tick() {
  console.log('tick' + count + arr[count]);
  count -= 1;
  if(count > 0) {timerId = setTimeout(tick, 1000);}
}, 1000);

// function tick(v) {
//   //console.log(v)
//   return function() {
//     console.log(v)
//   }
// }

// setTimeout( tick("AAA"), 1000)
// setTimeout( tick("BBB"), 1000)
// setTimeout( tick("CCC"), 1000)

// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }

// var array = [1, 2, 3, 4, 5]
// for(let i = 0; i < array.length; i++) {
//   setInterval(() => {
//     console.log(array[i])
//   }, 1000);
// }