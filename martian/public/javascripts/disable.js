import { _ } from './util.js';

const transceiver = _.$(".transceiver");
const sendInfo = _.$('.sendInfo');

function disableInputBox(){
    transceiver.disabled = true;
    sendInfo.disabled = true;
}

function enableInputBox(){
    transceiver.disabled = false;
    sendInfo.disabled = false;
}

export { disableInputBox, enableInputBox }