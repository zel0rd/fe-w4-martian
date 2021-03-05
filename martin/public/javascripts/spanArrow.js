// const arrowImg = document.querySelector(".arrowImg");
// let degree = 11;
// let degInteval = 22.5;

// arrowImg.addEventListener("click", function({target}){
//     degree += 360 / 16;
//     arrowImg.style.WebkitTransform =`rotate(${degree}deg) scale(0.1)`
//     console.log(target)
// })

const HexString = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const rotateArrow = (el) => {
    console.log(el)
    let timer = setTimeout(() => console.log(el), 1000);
}

export { rotateArrow }