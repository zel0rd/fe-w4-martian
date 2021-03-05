import { _ } from './util.js';

const transceiver = _.$(".transceiver");
const sendInfo = _.$('.sendInfo');
const transBtn = _.$(".transBtn");
const sendBtn = _.$(".sendBtn");

function disableInputBox(){
    transceiver.disabled = true;
    sendInfo.disabled = true;
    transBtn.disabled = true;
    sendBtn.disabled = true;
}

function enableInputBox(){
    transceiver.disabled = false;
    sendInfo.disabled = false;
    transBtn.disabled = false;
    sendBtn.disabled = false;
}

export { disableInputBox, enableInputBox }