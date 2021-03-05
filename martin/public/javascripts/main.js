import { _ } from './util.js';
import { hexToString, stringToHex } from './conversion.js';

const transceiver = _.$(".transceiver");
const sendInfo = _.$('.sendInfo');

transceiver.addEventListener("input", function({target}) {
    sendInfo.value = hexToString(target.value);
})

sendInfo.addEventListener("input", function({target}) {
    transceiver.value = stringToHex(target.value);
})
