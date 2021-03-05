const HexString = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const getArrowDeg = (el) => {
    let index = parseInt(HexString.indexOf(el.toUpperCase()))
    let deg = (11 + (index  * 22.5) - 90) % 360
    return deg
}

export { getArrowDeg }