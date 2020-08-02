# Chapter.14 API를 연동하여 뉴스뷰어 만들기



### 비동기 작업



#### Async

- 비동기 작업은 해야할 일들을 위임하고 기다리는 방식.
- 요청과 그 결과가 동시에 일어나지 않음.
- 동기방식에 비해 복잡하지만 결과가 주어지는 동안 다른 작업을 진행함으로써 자원을 효율적으로 사용할 수 있다는 장점이 존재함.

```react
const firstTask = () => {
  console.log('hello');
  secondTask();
};
const secondTask = () => {
  setTimeout(()=>{
    console.log('React');
  },0);
  thirdTask();
};
const thirdTask = () => {
  console.log('World');
};
```

#### Sync

- 반대 개념으로 동기적 작업은 순차적으로 일을 스스로 끝내 가는 방식.
- 요청과 그 결과가 동시에 일어남.
- 설계가 매우 간단하고 직관적이지만 결과가 도출되기 전까지 대기해야 된다는 단점이 있음.

```javascript
const firstTask = () => {
  console.log('hello');
  secondTask();
};
const secondTask = () => {
  console.log('React');
  thirdTask();
};
const thirdTask = () => {
  console.log('World');
};
```



#### 비동기 작업시 사용하는 방법들



1. Callback

- 함수 내부에서 특정한 시점에 호출 되는 함수
- 일반적으로 이벤트 함수 및 비동기 처리에서 사용함.
- 콜백함수의 수가 늘어날 수록 코드의 가독성이 떨어지는 단점이 존재함.

```javascript
const sum = (a, b, cb) => {
  const result = a + b;
  cb(result);
};

sum(3, 7, (result) => {
  console.log(result);
});
```



2. Promise

   ```javascript
   new Promise(function (resolve, reject){
   	// (...)
   });
   ```

- Promise Object 기반으로 동작
- Promise Object 생성 및 종료될 때까지 Pending/Fulfilled/Rejected 3가지 상태를 가진다.
- Promise 상태
  - Pending (대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
    (메서드를 호출하면 대기 상태가 되고, 호출할 때 콜백 함수의 인자로 resolve, reject에 접근가능)
  - Fulfilled (이행) : 비동기 처리가 완료되어 Promise가 결과 값을 반환해준 상태
    (resolve 가 실행된 상태, 이후 then() 을 이용하여 처리 결과값 받을 수 있음)
  - Rejected (실패): 비동기 처리가 실패하거나 오류가 방생한 상태
    (reject 실행 시 실패 처리의 결과 값을 catch() 로 받을 수 있다.)

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    $.get('/data', (response) => {
      if (response) {
        resolve(response);
      }
      reject(new Error('request is fail'));
    });
  });
};

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.error(e);
  });

```



3. async / await

- 기존 비동기 처리 방식인 callback & Promise  단점 보완하고 가독성 향상된 방식

```javascript
/*함수 앞에  `async` 라는 예약어 붙이고 내부 로직에 비동기 처리할 코드 앞에 await 를 붙인다.*/

const eatBlackfirst = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('sit and code');
    }, 100);
  });

const eatLunch = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('eat Lunch');
    }, 100);
  });

const eatDinner = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('go To Bed');
    }, 100);
  });

const day = async () => {
  const morning = await eatBlackfirst();
  console.log(morning);
  const afternoon = await eatLunch();
  console.log(afternoon);
  const evening = await eatDinner();
  console.log(evening);
};

day();
```



### Javascript HTTP Client



#### Ajax(Asynchronous Javascript And Xml)란?

> JavaScript를 사용한 비동기 통신이며, 클라이언트와 서버간의 XML 데이터를 주고받는 기술이다.
> XMLHttpRequest객체를 이용해서 전체 페이지를 리로드하지 않고 필요한 데이터만 로드할 수 있다



#### 많이 사용하는 Ajax 구현 방식



##### 1. fetch

- JavaScript의 내장 라이브러리이기 때문에 import 하지 않고 사용할 수 있다. 
- 라이브러리의 업데이트에 따른 에러 방지가 가능하다.
  (React Native의 경우 업데이트가 잦아서 라이브러리가 쫓아오지 못하는 경우가 많은데, fetch의 경우 이를 방지할 수 있다.)
- 네트워크 에러가 발생했을 때 기다려야한다. (response timeout API 제공X)
- 지원하지 않는 브라우저가 있다. 
- return값은 Promise 객체 형태이다.



##### 2. axios

- 구형 브라우저를 지원한다. 
- 응답 시간 초과를 설정하는 방법이 있다. 
- JSON 데이터 자동변환이 가능하다. 
- node.js에서의 사용이 가능하다. 
- request aborting(요청 취소)가 가능하다.
- catch에 걸렸을 때, .then을 실행하지 않고, console창에 해당 에러 로그를 보여준다.
- return값은 Promise 객체 형태이다.

