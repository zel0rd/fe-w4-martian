const foo = (delayTime) =>{
   
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
        resolve('완료')
        },delayTime)
    });
}


foo(2000).then((result)=> console.log(result));