import { _ } from './util.js';
import { hexCode } from './calculate.js';

const canvas = _.$('#canvas');
const ctx = canvas.getContext('2d');

const toRadian = (angle) => (angle * Math.PI) / 180;
const circleFill = (x, y, r, color) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, toRadian(360));
  ctx.fill();
};
const circleStroke = (x, y, r, color) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.arc(x, y, r, 0, toRadian(360));
  ctx.stroke();
};
const pizzaShape = (x, y, r, angleFrom, anglTo, color, dir = false) => {
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.arc(x, y, r, toRadian(angleFrom), toRadian(anglTo), dir);
  ctx.stroke();
};

const text = (value, x, y) => {
  ctx.font = '30px Arial';
  ctx.fillText(value, x, y);
};

let textX = 270;
let textY = 100;
const rightX = [0, 65, 45, 25, 0, -25, -45, -65, -65, -65, -45, -25, 0, 25, 45, 65];
const rightY = [0, 20, 50, 60, 60, 60, 50, 20, 0, -20, -50, -60, -60, -60, -50, -20];

export const renderPlate = () => {
  circleFill(250, 250, 200, 'rgb(255, 113, 113)');
  for (let i = 0; i <= 15; i++) {
    pizzaShape(250, 250, 200, 22.5 * i, 22.5 * (i + 1), 'black');
  }
  circleStroke(250, 250, 200, 'black');
  circleFill(250, 250, 50, 'rgb(255,255,255)');
  circleStroke(250, 250, 45, 'black');

  for (let i = 0; i <= 15; i++) {
    textX += rightX[i];
    textY += rightY[i];
    if (i < 10) text(i, textX, textY);
    else text(hexCode[i], textX, textY);
  }
};
