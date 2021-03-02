/* --------------------------------------------------------------------- */
/* --------▶︎▶︎▶︎ MyPromise 클래스: 비동기적으로 실행되는 함수의 순서를 제어 ◀︎◀︎◀︎--------*/
/* --------------------------------------------------------------------- */

export default class MyPromise {
    constructor(callback) {
        this.cb = callback;
        this.then(this.cb);
    }

    then(cb){
        return this;
    }
}