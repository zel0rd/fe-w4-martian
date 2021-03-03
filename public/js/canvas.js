const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = "#fff";

function draw() {
    //원 반지름, 센터 좌표 값 지정
    const ref = {
        bigRadius: 300,
        smallRadius: 100,
        xSmallRadius: 90,
        centerX: 350,
        centerY: 350,
        startAngle: 0,
        endAngle: Math.PI * 2
    };

    //피자 원 테두리
    ctx.beginPath();
    ctx.arc(ref.centerX, ref.centerY, ref.bigRadius, ref.startAngle, ref.endAngle);
    ctx.strokeStyle = "#3d3d3d";
    ctx.stroke();

    //피자 원
    ctx.beginPath();
    ctx.arc(ref.centerX, ref.centerY, ref.bigRadius, ref.startAngle, ref.endAngle);
    ctx.fillStyle = '#f77269';
    ctx.fill();

    //피자 선
    ctx.beginPath();
    let coordinates = {};
    for (let i = 0; i <= 360; i += 22.5) {
        coordinates.x = Math.floor(ref.bigRadius * Math.cos(toRadians(i)));
        coordinates.y = Math.floor(ref.bigRadius * Math.sin(toRadians(i)));
        ctx.moveTo(ref.centerX, ref.centerY);
        ctx.lineTo(coordinates.x + ref.centerX, coordinates.y + ref.centerY)
        ctx.stroke();
    }

    //수신기 원
    ctx.beginPath();
    ctx.arc(ref.centerX, ref.centerY, ref.smallRadius, ref.startAngle, ref.endAngle);
    ctx.fillStyle = '#fff';
    ctx.fill();

    //수신기 안에 원
    ctx.beginPath();
    ctx.arc(ref.centerX, ref.centerY, ref.xSmallRadius, ref.startAngle, ref.endAngle);
    ctx.strokeStyle = "#3d3d3d";
    ctx.lineWidth = 3;
    ctx.stroke();

    //그리기 종료
    ctx.closePath();
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

export { draw }