const foo = (delayTime) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('완료');
    }, delayTime);
  });

class MyPromise {
  constructor(initString) {
    this.initString = initString;
    this.cbList = [];
    console.log('이사이는?');
    setTimeout(() => {
      const fullString = this.cbList.reduce((res, fn) => fn(res), this.initString);
      console.log(fullString);
    }, 0);
  }
  then(cb) {
    this.cbList.push(cb);
    console.log(cb);
    return this;
  }
}

console.log('start');
new MyPromise('hello').then((v) => v + ' world').then((v) => v + ' and Kyle');
console.log('end');
