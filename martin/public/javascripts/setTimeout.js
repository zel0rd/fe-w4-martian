
// let count = 5
// let timerId = setTimeout(function tick() {
//   console.log('tick');
//   count -= 1;
//   if(count > 0) {timerId = setTimeout(tick, 1000);}
// }, 1000);

// var array = [1, 2, 3, 4, 5]
// for(var i = 0; i < array.length; i++) {
//   delay(i)
// }
// function delay(i) {
//   setTimeout(() => {
//     console.log(array[i])
//   }, 1000);
// }

var array = [1, 2, 3, 4, 5]
for(let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i])
  }, 1000);
}