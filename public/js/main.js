import { strToHex, hexToStr } from './converter.js';
import { _ } from './util.js';

const $pathArr = Array.from(_.$All('path')).slice(0, 16);
const $marsInput = _.$('.mars-send-input');
const $earthInput = _.$('.earth-send-input');
const [ $hexCodeOfMessage_mars, $hexCodeOfMessage_earth ] = _.$All('.send-receive-info');

const lightColor = "#fff58a";
$pathArr[0].style.fill = lightColor;

$marsInput.addEventListener('input', () => {
  $hexCodeOfMessage_mars.textContent = strToHex($marsInput.value);
});

$earthInput.addEventListener('input', () => {
  $hexCodeOfMessage_earth.textContent = strToHex($earthInput.value);
})