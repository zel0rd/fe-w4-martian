const canvas = document.querySelector('.canvas');
canvas.addEventListener('click', (e) => console.log(e))
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#fff";

function draw() {
    //원 테두리
    ctx.beginPath();
    ctx.arc(350, 350, 300, 0, Math.PI * 2);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.stroke();
    //피자 원
    ctx.beginPath();
    ctx.arc(350, 350, 300, 0, Math.PI * 2);
    ctx.fillStyle = '#f77269';
    ctx.fill();
    //피자 선
    ctx.beginPath();
    ctx.moveTo(350, 650);
    ctx.lineTo(350, 50);
    ctx.moveTo(650, 350);
    ctx.lineTo(50, 350);
    ctx.moveTo(650, 350);
    ctx.lineTo(50, 350);
    ctx.stroke();
    ctx.closePath();
}
draw();