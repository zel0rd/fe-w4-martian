const arcCreate = (x, y, radius, startAngle, endAngle) => ({ x, y, radius, startAngle, endAngle });
const getHalfSize = (canvas) => {
    return {
        w: canvas.clientWidth / 2,
        h: canvas.clientHeight / 2,
    };
};

const circleDraw = (ctx, arc, color = '#FFF') => {
    const { x, y, radius, startAngle, endAngle } = arc;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

const piCreate = (ctx, arc, color = '#FFF', strokeColor = '#FFF') => {
    const { x, y, radius, startAngle, endAngle } = arc;
    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.lineTo(x, y);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = strokeColor;
    ctx.stroke();    
    ctx.closePath();
};

const piAllCreate = (ctx, x, y, color = '#FFF') => {
    const onePer = (Math.PI * 2) / 16;
    let piStart = Math.PI;
    let piEnd = piStart + onePer;

    for (let i = 0; i < 16; i++) {
        const piArc = arcCreate(x, y, y - 10, piStart, piEnd);
        piCreate(ctx, piArc, color);

        piStart += onePer;
        piEnd += onePer;
    }
};

const piTextDraw = (ctx, textDrawValues, color = '#FFF') => {
    let {x, y} = textDrawValues;
    const {xCorrect, yCorrect, distanceFromCenter} = textDrawValues

    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    const onePer = Number((2 / arr.length).toFixed(3));
    let decimal = 1.56;

    ctx.beginPath();
    ctx.font = '24px NanumGothic';
    ctx.fillStyle = color;

    x -= xCorrect;
    y += yCorrect
    arr.forEach((value) => {
        const xTmp = Math.floor(x + Math.cos(Math.PI * decimal) * (x * distanceFromCenter));
        const yTmp = Math.floor(y + Math.sin(Math.PI * decimal) * (y * distanceFromCenter));
        ctx.fillText(value, xTmp, yTmp);
        decimal += onePer;
    });
    ctx.closePath();
};

// ------------------------------------------------------------------

const createCanvas = ({canvas, color = "#000"}) => {
    const { w: halfW, h: halfH } = getHalfSize(canvas);

    const ctx = canvas.getContext('2d');

    piAllCreate(ctx, halfW, halfH, color);
    const smallCircleArc = arcCreate(halfW, halfH, Math.floor(halfH / 6), 0, Math.PI * 2);
    circleDraw(ctx, smallCircleArc);
    

    const textDrawValues = {x: halfW, y: halfH, xCorrect: 5, yCorrect: 8, distanceFromCenter: 0.8};
    piTextDraw(ctx, textDrawValues);
};

export default createCanvas;
