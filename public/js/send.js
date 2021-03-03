const str2hex = (str) => {
    const strArr = str.split('');

    let hexArr = [];
    strArr.forEach(v => {
        let ascII2hex = v.charCodeAt().toString(16);
        hexArr.push(ascII2hex);
    });
    return hexArr
}

const hex2str = (hex = str2hex("HELLO")) => {
    const sendReceive = document.querySelector('#sendReceive');
    const interpret = document.querySelector("#interpret");
    const interpretedText = document.querySelector("#interpretedText");

    sendReceive.innerHTML += hex;

    interpret.addEventListener('click', function () {
        let arr = [];
        hex.forEach(v => arr.push(String.fromCharCode("0x" + v, 16)));
        interpretedText.innerHTML = arr.join("");
    })
}

export { str2hex, hex2str }
