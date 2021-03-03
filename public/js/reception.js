import {factors} from "./common.js";
const rotateArrow = (a,i) =>{
    //일단 요소 다가져와 놓고 나중에 빼기 

    const angle = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    new Promise ((res,rej)=>{
        setTimeout(()=>{
            // console.log("a",a);
            a = a.toString().toUpperCase();
            const index = angle.indexOf(a);
            const hexCode = document.querySelectorAll(".line__txt");
            console.log(hexCode);
            let hexDic={};
            hexCode.forEach((hex,i)=>{
                var a=hex.innerHTML;
                hexDic[a]=i;
            })
            console.log("hexDic",hexDic);
            // console.log("hexDic",hexDic);
            // console.log("hhhhhidx",hexCode[index]);
            // console.log("cap",capital);
            // console.log("idx",i,"index",index,"a",a);
            const target = hexDic[angle[index]];
            console.log("tar",target);
            LightOn(target,hexCode);
            // const target = Object.entries(hexCode).find((item) => item[1].dataset.id === a);
            // console.log("tar",target);
        },2000 *(i+1))

    });


    
    
  

   
};

const LightOn = (target,hexCode)=>{
    
    var t = hexCode[target];
    t.classList.add('light');
    console.log("tttttt",t);

};

export {rotateArrow,LightOn};

// const rotateArrow = (a,b,i) =>{
//     //일단 요소 다가져와 놓고 나중에 빼기 
//     const {sendInp, sendBtn, sendTr, receptInp, receptBtn} = factors;
//     const angle = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
//     const hexCode = document.querySelectorAll(".line__txt");
//     // console.log(line);
//     // console.log(line[0]);
//     var x = hexCode[12].innerText
//     console.log("x",x);
//     console.log(angle.indexOf(x));
//     var a = angle.indexOf(x);

//     sendBtn.addEventListener("click",(e)=>{
//         arrow.style.transform = "rotate(" + (a+1) * 22.5 + "deg)";

//     })
// }