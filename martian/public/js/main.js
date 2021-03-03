import { _ } from './util.js'

function drawWheel(x, y, length1, length2) {
    const canvas = _.$('.wheel');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.fillStyle = 'pink';
    let lastLocation = 0;
    for (let i = 1; i <= 16; i++) {
        ctx.lineTo(x, y);
        ctx.arc(x, y, length1, lastLocation, lastLocation + (2 * Math.PI * i / 16));
    }
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'white'
    ctx.arc(x, y, length2, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()
    ctx.closePath()
}

drawWheel(200, 200, 180, 50)