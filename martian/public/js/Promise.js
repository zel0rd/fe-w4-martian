const pipe = (...fns) => (acc) => fns.reduce((a, f) => f(a), acc);

export default class MyPromise {
  constructor(fn) {
    this.cbList = [];
    this.catchCb = (e) => {
      throw e;
    };
    // fulfilled, rejected
    this.state = "pending";

    setTimeout(() => {
      try {
        this.state = "fulfilled";
        fn(pipe(...this.cbList), this.catchCb);
      } catch (e) {
        this.state = "rejected";
        this.catchCb(e);
      }
    }, 0);
  }

  then(callback) {
    this.cbList.push(callback);
    return this;
  }
  catch = (callback) => {
    this.catchCb = callback;
    return this;
  };
}
