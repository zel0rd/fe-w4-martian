export default class MyPromise {
  constructor(value) {
    this.cbList = [];
    this.value = null;

    setTimeout(() => {
      return this.cbList.reduce((acc, cb) => cb(acc), value);
    }, 0);
  }

  then(callback) {
    this.cbList.push(callback);
    return this;
  }
}
