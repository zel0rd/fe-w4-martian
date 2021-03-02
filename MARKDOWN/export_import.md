## 🌟ES모듈(export / import) 사용하기🌟

Common JS를 기반으로 하였던 Node.js에서 <code>export</code>, <code>import</code>와 같은 ES 모듈을 Node.js 버전 13.2부터 ES 모듈 시스템에 대한 정식 지원이 시작됨에 따라 다른 도구 없이 Node.js에서 손쉽게 ES 모듈을 사용할 수 있게 되었다. 🙊

기존 Common JS 방식을 이용해서 간단한 예제 모듈을 작성해 보자.

> 참고사이트 : https://www.daleseo.com/js-node-es-modules/
```
🌟time.js
const moment = require("moment")

exports.now = function () {
  return moment().format()
}
```
```
🌟time_test.js
const { now } = require("./time")

console.log("Now:", now())
```

위와 같이 <code>require</code>를 사용해야 한다.

이를 ES 모듈을 적용한 예를 보자.

```
🌟time.js
import moment from "moment"

export function now() {
  return moment().format()
}
```
```
🌟time_test.js
import { now } from "./time"

console.log("Now:", now())
```

처음에 블로그를 보고 이렇게 따라하였으나 오류가 발생하였습니다.
```
cannot use import statement outside a module
```
이러한 문구였고 찾아보니 html에서 ES Module를 사용하기 위해선 <code>script type="module"</code> 처리를 해주면 되었고 js 파일에선 <code>package.json</code>에서 별도의 타입을 지정해 주어야 했다.

<img src="https://i.ibb.co/tDQqQNj/image.png">