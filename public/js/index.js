import _ from './util.js';
import createCanvas from "./createCanvas.js";
import convertCommunication from "./convert.js";

const earthCanvas = {
    canvas: _.$('.earth-transceiver'),
    color: "#1693DC",
}
const marsCanvas = {
    canvas: _.$('.mars-transceiver'),
    color: '#42023F',
};
createCanvas(earthCanvas);
createCanvas(marsCanvas);

// 공사중 ----▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
const transceiverReceiveWrap = _.$(".transceiver__control__receive");
const transceiverSendWrap = _.$(".transceiver__control__send");

const transceiverParts = {
    receiveContentInput: _.$("input", transceiverReceiveWrap),
    translateBtn: _.$("button", transceiverReceiveWrap),
    sendContentInput: _.$(".send__text", transceiverSendWrap),    
    sendToEarthBtn: _.$("button", transceiverSendWrap),
};

convertCommunication(transceiverParts);