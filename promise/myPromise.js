class MyPromise {
    constructor(initialStr){
        this.cbList=[];
        //cb를 순서대로 실행 ->비동기로 실행 -> setTimeOut
        setTimeout(()=>{
            //cbList 순서대로 실행,, 반복문 -> reduce를 활용
            this.cbList.reduce(function(acc,cur){
                console.log(cur(acc(initialStr)));
            })

        },0);
    }
    then(cb){
    //cb를 cbList에추가
        this.cbList.push(cb);
        return this; 
    }
}

console.log('start');
new MyPromise('hello')
    .then((v)=> v+' world')
    .then((v)=> v+' and tami');
console.log('end');
