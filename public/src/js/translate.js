import { hexArrToString } from './util/calculate.js';
import { setSendBox } from './domControl.js';
import { _ } from './util/util.js';

const BLANK = ' ';

export const translateHex = (value) => {
  const hexArr = value.split(BLANK);
  return hexArrToString(hexArr);
};

export const translate = (receiveBox, sendBox) => {
  const value = receiveBox.value;
  const translatedStr = translateHex(value);
  setSendBox(translatedStr, sendBox);
};
