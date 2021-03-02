class MyPromise {
    constructor(callback) {
        callback(this.resolve.bind(this), this.reject.bind(this))
        this.cbList = [];
    }

    resolve(input) {
        console.log('resolve 호출')
        this.cbList.reduce((acc, cur) => cur(acc), input)
    }
    
    reject(input) {
        console.log('reject 호출')
    }

    then(cb) {
        this.cbList.push(cb)
        return this;//메소드 체이닝
        //thenable 한 방법???
    }
}

// console.log("start")

// new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("hello");
//     }, 250);
// })
//     .then((v) => v + ' world')
//     .then((v) => console.log(v + ' and crong'))

// console.log("end")


const cb1 = () => new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('cb1')
        resolve('cb1')
    }, 5000)
})
const cb2 = () => new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('cb2')
        resolve('cb2')
    }, 2000)
})
const cb3 = () => new MyPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('cb3')
        resolve('cb3')
    }, 2000)
})
cb1().then(cb2).then(cb3)
//왜 cb1() 실행 이후에 then 2개가 동시에 실행되지????????????????????????????


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 500);
// })
//     .then((v) => {
//         setTimeout(() => {
//             console.log(v+'1번째 then')
//         }, 1000)
//     })
//     .then((v) => console.log('2번째 then'))




// 빰빰-> 마지막 then과의 싱크를 어떻게 맞춰야하나
// 카일-> 궁금한점이 첫번째 then이나 MyPromise할 때 객체를 반환 하면서 setTimeout 콜백함수가 왜 실행이 안하고 마지막까지 기다리나요??


