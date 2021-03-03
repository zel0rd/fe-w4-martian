// 2021.03.02 수업때 했던 MyPromise.
class MyPromise {
    constructor(initialStr) {
        this.str = initialStr;
        this.cbList = [];

        setTimeout(() => {
            const result = this.cbList.reduce((str, func) => func(str), this.str);
            console.log(result);
        }, 0);
    }
    then(cbFunc) {
        this.cbList.push(cbFunc);
        return this;
    }
}

// ---------------------------
console.log('start');
new MyPromise('hello').then((v) => v + ' world').then((v) => v + ' and crong');
console.log('end');