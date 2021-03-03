import { _ } from './util/util.js';
import { getHexIdx } from './util/calculate.js';

const arrow = _.$('.arrow');

const isRightDir = (idx, targetIdx) => {
  const length = 16;
  const rightDir = Math.abs(idx - targetIdx);
  const leftDir = targetIdx > idx ? length + idx - targetIdx : length - idx + targetIdx;
  return rightDir < leftDir;
};

//dir이 true이면 시계방향
const getAngle = (targetIdx, dir) => {
  const defaultAngle = 11.5;
  const oneAngle = 360 / 16;
  let angle = defaultAngle + targetIdx * oneAngle;
  return dir ? angle : angle - 360;
};

const rotateArrow = (idx, targetIdx) => {
  const dir = isRightDir(idx, targetIdx);
  const arrowAngle = getAngle(targetIdx, dir);
  arrow.style.transform = `rotate(${arrowAngle}deg)`;
};

const initArrowRotate = (beforeIdx = 0) => (hex) => {
  const targetIdx = getHexIdx(hex);
  rotateArrow(beforeIdx, targetIdx);
  beforeIdx = targetIdx;
  return targetIdx;
};

/*
역할:16진수 받기
    16진수에 인덱스를 가져와서 rotateArrow(화살표 돌려주기)
    이전 위치 업데이트
*/
export const arrowRotate = initArrowRotate();
