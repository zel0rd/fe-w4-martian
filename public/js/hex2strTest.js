const arr = ["0x48", "0x45", "0x4c", "0x4c", "0x4f"];

function hex2strTest(hexArr) {
    const hexStr = hexArr.toString();
    let str = "";
    for (let i = 0; i < hexStr.length; i += 5) {
        const a = String.fromCharCode(parseInt(hexStr.substr(i, 4)), 16);
        str += a;
    }
    return str;

}

export { arr, hex2strTest };
