/* --------------------------------------------------------------------- */
/* ----------▶︎▶︎▶︎ translator.js: 문자/16진수 변환과 관련된 함수 저장 ◀︎◀︎◀︎----------*/
/* --------------------------------------------------------------------- */

/*
! 모든 함수는 순수하게(의존성을 낮추기) 만들기. 매직넘버 없게 주의.
todo - [ ] 16진수 -> 문자열 변환 함수 만들기
todo - [x] 문자열 -> 16진수 변환 함수 만들기
todo - [ ] 각 16진수 글자와 각 16진수 글자에 해당하는 각도(화살표가 회전해야 하는 각도)를 key-value로 저장하기
todo - [ ] 수신한/입력받은 16진수를 2초마다 하나씩 가리키는 함수(화살표의 각도를 돌려주는 애니메이션 함수) 만들기
todo - [ ] 수신한 16진수를 송수신정보에 출력해주는 함수 만들기
todo - [ ] 해석하기 버튼에 클릭이벤트 발생 시 지구어로 변환된 결과를 송수신정보에 출력해주는 함수 만들기
*/

import utill from './utill.js';

//테스트용
// function fillSlices() {
//     const textArr = getNodeList("path");
//     textArr[0].setAttribute('fill', '#ff7f50');
//     utill.addClass(textArr[0], "blink");
//     console.log(textArr)
// }

//문자열 -> 10진수 -> 16진수
function convertToHexadecimal (str){
    const decArr = [];
    const letterArr = str.split('');
    letterArr.forEach(letter => decArr.push(letter.charCodeAt(0)));
    return decArr.reduce((acc, cur) => acc += cur.toString(16), '');
}

console.log(convertToHexadecimal('hello'));

/*
*svg 돌림판을 동적으로 만들어주는 로직. figma로 가져오는 방식으로 대체했기 때문에 현재는 쓰지 않음.*
*/
// const svgEl = utill.$('svg');
// const slices = [
//   { percent: 0.0625, color: 'Coral' },
//   { percent: 0.0625, color: '#00ab6b' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
//   { percent: 0.0625, color: 'CornflowerBlue' },
// ];
// let cumulativePercent = 0;

// function getCoordinatesForPercent(percent) {
//   const x = Math.cos(2 * Math.PI * percent);
//   const y = Math.sin(2 * Math.PI * percent);
//   return [x, y];
// }

// //svg에 path를 동적으로 만들어서 추가
// function fillSlices(){
//     slices.forEach(slice => {
//     const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
//     // 히나의 슬라이스가 끝나는 곳이 다른 슬라이스가 시작되는 곳이 되므로 퍼센트는 누적된다.
//     cumulativePercent += slice.percent;
//     const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
//     // 만약 50퍼가 넘는 슬라이스가 있을 경우, 더 큰 arc를 택한다.
//     const largeArcFlag = slice.percent > .5 ? 1 : 0;
//     // 읽기 쉽도록 배열로 만들어서 쪼인.
//     const pathData = [
//         `M ${startX} ${startY}`, // Move
//         `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
//         `L 0 0`, // Line
//     ].join(' ');
//     //패쓰 만들어서 svg에 추가하기
//     const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     pathEl.setAttribute('d', pathData);
//     pathEl.setAttribute('fill', slice.color);
//     svgEl.appendChild(pathEl);
//     })
// }

export { convertToHexadecimal }