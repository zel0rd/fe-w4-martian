/* --------------------------------------------------------------------- */
/* --------▶︎▶︎▶︎ MyPromise 클래스: 비동기적으로 실행되는 함수의 순서를 제어 ◀︎◀︎◀︎--------*/
/* --------------------------------------------------------------------- */

/*
! then은 콜백함수를 인자로 받으며 자기 자신(this/MyPromise)을 리턴하며, 동기로 실행된다.
! cbList내부의 콜백함수들을 차례대로 실행하려면, cbList에 추가하는 로직은 동기로 실행해야한다.
TODO - [ ] MyPromise 안에서 순서대로 실행되어야 하는 함수는 cblist라는 배열에 담는다.
*/

//미완성
export default class MyPromise {
    constructor(callback) {
        this.cbList = [];
        // setTimeout(this.cbList.forEach(fn) => fn());
        this.then(callback);
    }

    then(callback){
        this.cbList.push(callback)
        return this;
    }
}