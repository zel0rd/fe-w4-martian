## Promise 란?
<code>Promise</code> 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다.

일단 사용방법을 먼저 알아보도록 하자!

<code>Promise</code>는 다음 중 하나의 상태를 가진다.
- 대기(Pending): 이행하거나 거부되지 않은 초기 상태.
- 이행(fulfilled): 연산이 성공적으로 완료됨.
- 거부(rejected): 연산이 실패함.

<img src="https://mdn.mozillademos.org/files/8633/promises.png">


> Method

<code>Promise.all(iterable)</code>

<code>iterable</code>내의 모든 프로미스가 이행한 뒤 이행하고, 어떤 프로미스가 거부하면 즉시 거부하는 프로미스를 반환한다. 반환된 프로미스가 이행하는 경우 <code>iterable</code> 내의 프로미스가 결정한 값을 모은 배열이 이행 값이다. 반환된 프로미스가 거부하는 경우 <code>iterable</code> 내의 거부한 프로미스의 이유를 그대로 사용한다. 이 메서드는 여러 프로미스의 결과를 모을 때 유용하다.

<code>Promise.race(iterable)</code>

<code>iterable</code> 내의 어떤 프로미스가 이행하거나 거부하는 즉시 스스로 이행하거나 거부하는 프로미스를 반환한다. 이행 값이나 거부 이유는 원 프로미스의 값이나 이유를 그대로 사용한다.

<code>Promise.reject()</code>

주어진 이유로 거부하는 <code>Promise</code> 객체를 반환한다.

<code>Promise.resolve()</code>

주어진 값으로 이행하는 <code>Promise</code> 객체를 반환한다. 값이 <code>then</code> 가능한 (즉, <code>then</code> 메서드가 있는)경우, 반환된 프로미스는 <code>then</code> 메서드를 따라가고 마지막 상태를 취한다.

#### MDN참고

기본적으로 <code>Promise</code>는 함수에 콜백을 전달하는 대신에, 콜백을 첨부하는 방식의 <code>객체</code>이다.

비동기로 음성 파일을 생성해주는  createAudioFileAsync()라는 함수가 있었다고 생각해보세요. 해당 함수는 음성 설정에 대한 정보를 받고, 두 가지 콜백 함수를 받습니다. 하나는 음성 파일이 성공적으로 생성되었을때 실행되는 콜백, 그리고 다른 하나는 에러가 발생했을때 실행되는 콜백입니다.

createAudioFileAsync()는 함수는 아래와 같이 사용됩니다.  
```
function successCallback(result) {
  console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
  console.log("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```
…모던한 함수들은 위와 같이 콜백들을 전달지 않고 콜백을 붙여 사용할 수 있게 Promise를 반환해줍니다.

만약 createAudioFileAsync() 함수가 Promise를 반환해주도록 수정해본다면, 다음과 같이 간단하게 사용되어질 수 있습니다.
```
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```
…조금 더 간단하게 써보자면:
```
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```
우리는 이와 같은 것을 비동기 함수 호출이라고 부릅니다. 이런 관례는 몇 가지 장점을 갖고 있습니다. 각각에 대해 한번 살펴보도록 합시다. 

## Guarantees

- 콜백은 JavaScript Event Loop가 현재 실행중인 콜 스택을 완료하기 이전에는 절대로 호출되지 않습니다.
- 비동기 작업이 성공하거나 실패한 뒤에 then()을 이용하여 추가한 콜백의 경우에도 절대 호출되지 않는다.
- then()을 여러번 사용하여 여러개의 콜백을 추가할 수 있다. 이 경우에는 주어진 순서대로 하나하나 실행된다.

## Chaining
<code>then()</code> 함수는 새로운 promise를 반환한다.
처음에 만들었던 promise와는 다른 새로운 promise이다.
```
const promise = doSomething();
const promise2 = promise.then(success,fail);
```

> 콜백지옥
```
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

> 모던한 방식으로 접근하기 promis chain
```
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```
이때 <code>반환값(return)</code>이 반드시 있어야 한다. 만약 없다면 콜백 함수가 이전의 promise의 결과를 받지 못한다.

## catch

<code>catch</code>는 chain에서 작업이 실패한 후에도 새로운 작업을 수행하는 것이 가능하며 매우 유용하다.

```
new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this, whatever happened before');
});

<output>

Initial
Do that
Do this, whatever happened before
```
여기서 <code>Do this</code> 텍스트가 출력되지 않은 것은 <code>Something failed</code> error가 <code>rejection</code>을 발생시켰기 때문이다.




