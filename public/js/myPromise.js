class MyPromise {
    constructor(str, sec) {
        this.strArr = [];

        setTimeout(() => {
            this.strArr.reduce((acc, fn) => fn(acc), str)
        }, sec * 1000)
    }

    then(cb) {
        this.strArr.push(cb)
        return this;
    }
}

export { MyPromise };