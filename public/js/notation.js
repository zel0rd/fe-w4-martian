const a2Hex = (text)=>{
    //text->ASCII->16진수
    // console.log(text.charCodeAt(0));
    return text.charCodeAt(0).toString(16);
};

//16진수->문자(한번에 )
//hex2a("68656c6c6f")
const hex2a=(hex)=>{
    var str = '';
    for (var i = 0; (i <= hex.length); i += 2){
     //    console.log("hex.substr(i,2)",hex.substr(i,2));
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
     //    console.log(i,"안의 str",str);
    }
 // console.log(str);
 return str;
 
};
 
export { a2Hex, hex2a };

 //문자 ->16진수 한번에
// function base64ToHex(str) {
//     // var raw = window.atob(str);

//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       const hex = str.charCodeAt(i).toString(16);
//       result += (hex.length === 2 ? hex : '0' + hex);
//     }
//     console.log(result.toUpperCase());
//     return result.toUpperCase();
//   }
// base64ToHex("h");