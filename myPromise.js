class MyPromise {
  constructor(initialStr) {
    this.initialStr = initialStr;
    this.cbList = [];
    setTimeout(() => {
      const result = this.cbList.reduce((prev, curr) => {
        return curr(prev);
      }, this.initialStr);
      console.log(result);
    }, 0);
  }

  then(cb) {
    this.cbList.push(cb);
    return this;
  }
}

// --------------------------------------------● 실행 ●--------------------------------------------

console.log("start")

new MyPromise('hello')
  .then(v => v + ' world')
  .then(v => v + ' and crong');

console.log("end")

//실행결과 :  
// start
// end
// hello world and crong