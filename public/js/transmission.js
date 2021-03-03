import {hex2a,a2Hex} from "./notation.js"
import {rotateArrow,LightOn} from "./reception.js";
const transmission = (factors) =>{

    const {sendInp, sendBtn, sendTr, receptInp, receptBtn} = factors;


    let arr=[];
    console.log(sendInp);
    sendInp.addEventListener("keydown",(e)=>{
        console.log(e);
        // console.log(e.currentTarget);
        var x =e.key;
        var k = a2Hex(x);
        console.log(k);
        if(k==42){
            arr.pop();
        }
        else{
            arr.push(k)
        }
        console.log(arr);
        console.log(typeof(arr[0]));
        sendTr.innerText = arr;
    });
    

    sendBtn.addEventListener("click",()=>{
        response(arr,factors)

    });
}

const response = (content, factors) =>{
    const {sendInp, sendBtn, sendTr, receptInp, receptBtn} = factors;
    var i=0;
    var listt = [];
    while(content.length>0){
        content.shift().split("").forEach((le)=>{
            rotateArrow(le,i)
            i++;
        })
        // var a,b=content.shift().split("");
        // console.log(a,b,i);
        // rotateArrow(a,i);
        // i++;
        // rotateArrow(b,i);

    }
}


// var a=arr.shift()
// a.toString();
// console.log(a[0]);
// console.log(a[1]);

export {transmission};