class MyPromise2 {
    constructor(){

    }

    then(){

    }
}

const p = new MyPromise2((resolve,reject)=>{
    setTimeout(()=>{
        resolve('completed')}
    ,1000)
    
});

p.then((res)=> console.log(res));
