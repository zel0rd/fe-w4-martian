import MyPromise from './myPromise.js';
import { arrowRotate } from './arrow.js';
import { renderPlate, blingText } from './canvas.js';
import { setReceiveBox, makeBtnAble } from './domControl.js';
import { stringToHexArr } from './util/calculate.js';
import { translate } from './translate.js';
import { _ } from './util/util.js';
const { log } = console;
const BLANK = ' ';
const receiveBox = _.$('.receive>input');
const sendBox = _.$('.send>input');
const translateBtn = _.$('.receive>button');

//초기 원판 render
renderPlate();
translateBtn.addEventListener('click', translate.bind(null, receiveBox, sendBox));

//초기 전송 단어
const word = 'hello world';

//문자=>hex Arr
const parsedWord = stringToHexArr(word); //go(word,stringToHexArr)

//2. 5초-2초 간격으로 진행
new MyPromise(parsedWord, 5000)
  .then((value, idx) => {
    if (idx !== 0) setReceiveBox(BLANK, receiveBox); //글자 하나당 receiveBox에 띄어쓰기 추가(맨처음 제외)
    if (idx === parsedWord.length - 1) {
      setTimeout(() => {
        blingText({ idx: null, clear: true }); //글자 깜빡임 interval 제거 (마지막일 때)
        makeBtnAble(translateBtn);
      }, 5000);
    }
    return value;
  })
  .then((hex) => {
    const chars = hex.split('');
    new MyPromise(chars, 2000)
      .then(arrowRotate)
      .then((idx) => setReceiveBox(idx, receiveBox))
      .then((idx) => blingText.call(null, { idx, clear: false }));
  });
