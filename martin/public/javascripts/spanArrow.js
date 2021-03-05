const arrowImg = document.querySelector(".arrowImg");
let degree = 11;
let degInteval = 22.5;

arrowImg.addEventListener("click", function({target}){
    degree += 360 / 16;
    arrowImg.style.WebkitTransform =`rotate(${degree}deg) scale(0.1)`
    console.log(target)
})