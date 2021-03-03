import { _ } from './util/util.js';
import { hexCode } from './util/calculate.js';

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

const text = (value, x, y, color = '#fff') => {
  ctx.font = '30px Arial';
  ctx.fillStyle = color;
  ctx.fillText(value, x, y);
};

const renderText = () => {
  let textInitialX = 270;
  let textInitialY = 100;
  const textLocationX = [0, 65, 45, 25, 0, -25, -45, -65, -65, -65, -45, -25, 0, 25, 45, 65];
  const textLocationY = [0, 20, 50, 60, 60, 60, 50, 20, 0, -20, -50, -60, -60, -60, -50, -20];
  for (let i = 0; i <= 15; i++) {
    textInitialX += textLocationX[i];
    textInitialY += textLocationY[i];
    if (i < 10) text(i, textInitialX, textInitialY);
    else text(hexCode[i], textInitialX, textInitialY);
  }
};

const renderBlingText = (target) => {
  let textInitialX = 270;
  let textInitialY = 100;
  const textLocationX = [0, 65, 45, 25, 0, -25, -45, -65, -65, -65, -45, -25, 0, 25, 45, 65];
  const textLocationY = [0, 20, 50, 60, 60, 60, 50, 20, 0, -20, -50, -60, -60, -60, -50, -20];
  for (let i = 0; i <= 15; i++) {
    textInitialX += textLocationX[i];
    textInitialY += textLocationY[i];
    let color;
    if (i !== target) continue;
    else color = i === target ? 'blue' : '#FFF';
    if (i < 10) text(i, textInitialX, textInitialY, color);
    else text(hexCode[i], textInitialX, textInitialY, color);
  }
};

export const renderPlate = () => {
  const [centerX, centerY] = [250, 250];
  const [bigRadius, smallRadius, smallBorderRadius] = [200, 50, 45];
  const oneAngle = 360 / 16;
  circleFill(centerX, centerY, bigRadius, '#F67269');
  for (let i = 0; i <= 15; i++) {
    pizzaShape(centerX, centerY, bigRadius, oneAngle * i, oneAngle * (i + 1), '#000');
  }
  circleStroke(centerX, centerY, bigRadius, '#000');
  circleFill(centerX, centerY, smallRadius, '#fff');
  circleStroke(centerX, centerY, smallBorderRadius, '#000');
  renderText();
};

// 글자 반짝이기
const initBlingText = (renderTimer = null, blingTimer = null) => ({ idx, clear = false }) => {
  if (blingTimer || renderTimer) clearBling(blingTimer, renderTimer);
  if (!clear) {
    blingTimer = setInterval(renderBlingText.bind(this, idx), 200);
    renderTimer = setInterval(renderPlate, 400);
  }
};

const clearBling = (blingTimer, renderTimer) => {
  clearInterval(blingTimer);
  clearInterval(renderTimer);
  renderPlate();
};

export const blingText = initBlingText();
