import { go, pipe } from './util/util.js';

class MyPromise {
  constructor(initValue, delay) {
    this.initValue = initValue;
    this.cbList = [];
    this.initValue.forEach((v, idx) => {
      setTimeout(() => {
        const fns = pipe(...this.cbList);
        fns(v, idx);
      }, delay * idx);
    });
  }
  then(cb) {
    this.cbList.push(cb);
    return this;
  }
}

export default MyPromise;
