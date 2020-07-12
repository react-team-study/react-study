# chapter.07 컴포넌트의 라이프사이클 메서드

### 라이프사이클 메서드



![LifeCycle API](/Users/hongsam/github/react-study/kimjongsoo/chapter.07/45587740-f8ed0e00-b944-11e8-9c99-7baab37944e8.jpg)



- 라이프사이클 메서드는 컴포넌트의 생애주기에 따라 상태 변화가 발생할 때 마다 실행되는 메서드이다.
- Will 접두사가 붙은 메서드 :  어떤 작업을 작동하기 전에 실행되는 메서드 
- Did 접두사가 붙은 메서드 :  어떤 작업을 작동한 후에 실행되는 메서드
- 라이프 사이클 mount / update/ unmount 로 크게 분류할 수 있다.
  - mount : 페이지에 컴포넌트가 나타남.
  - update: 컴포넌트 정보를 업데이트 (리렌더링)
  - unmount: 페이지에서 컴포넌트가 사라짐. 



### Mount

- DOM 이 생성되고 웹 브라우저 상에 나타나는 것을 <b>`Mount`</b> 라고 한다.
- <b>`Mount`</b>할 때 호출하는 메서드
  - `constructor`: 컴포넌트를 새로 만들 때마다 호출되는 `클래스 생성자 메서드`
  - `getDerivedStateFromProps`: `props`에 있는 값을 `state`에 넣을 때 사용하는 메서드
  - `render`: 해당 컴포넌트를 렌더링하는 메서드
  - `componentDidMount`:  컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

### Update

- 컴포넌트가 <b>`Update`</b> 하는 경우

> `props`가 바뀔 때 : 컴포넌트에 전달하는 `props`의 값이 바뀌면 컴포넌트 렌더링이 이루어 진다
>
> `state`가 바뀔 때 : `setState`를 통해 업데이트 될 때.
>
> 부모 컴포넌트가 리렌더링 될 때, 자식 컴포넌트 또한 리렌더링 된다.
>
> `this.forceUpdate`로 강제로 렌더링을 트리거 할 때



- 컴포넌트가 <b>`Update`</b> 할 때 호출하는 메서드
  - `getDerivedStateFromProps`:  props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용
  - `shouldComponentUpdate`
    -  컴포넌트가 리렌더링을 해야 할 지 말아야할지를 결정하는 메서드. 
    - `true/false` 를 반환하며 `true` 반환 시 다음 라이프사이클 메서드를 계속 진행, `false` 반환 시 작업을 중지함.(컴포넌트 리렌더링 중지)
    - 특정 함수에서 `this.forceUpdate()` 호출 시 `shouldComponentUpdate()` 생략하고 바로 `render` 함수 호출함.
  - `render`: 컴포넌트 리렌더링함.
  - `getSnapshotBeforeUpdate`: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
  - `componentDidUpdate`: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

### Unmount

- 컴포넌트를 DOM 에서 제거
- 컴포넌트가 `unmount` 할 때 호출하는 메서드
  - `componentWillUnmout`: 컴포넌트가 웹 브라우저 상에서 사라지기전에 호출하는 메서드



### 라이프사이클 메서드 세부 정리

1. `render`
   - 라이프사이클 메서드 중 유일한 필수 메서드
   - 메서드 내부에서도 `this.props` 와 `this.state` 에 접근 가능하며 리액트 요소(태그 or 컴포넌트)를 반환
   - 아무것도 렌더링 하지 않을 경우 `null`혹은 `false` 반환
   - 메서드 내부에서는 `setState` 사용이 불가, 브라우저의 DOM 접근 불가
   - DOM 정보를 가져오거나 `state` 변화를 줄 때는 `componentDidMount` 에서 처리해야함.
2. `constructor`
   - 컴포넌트 생성자 메서드
   - 컴포넌트 만들 때 최초 실행 및 초기 `state`  선언
3. `getDerivedStateFromProps`
   - 리액트 v16.3 이후에 새로 만들어진 라이프사이클 메서드
   - `props`로 받아 온 값을 `state`에 동기화 시키는 용도로 사용
   - 컴포넌트가 `mount`,`update` 될 때 호출된다.
4. `componentDidMount`
   - 컴포넌트를 만들고, 첫 렌더링 완료 후 실행
   - 메서드 내부에서 다른 자바스크립트 라이브러리 , 프레임워크 함수를 호출 하거나 이벤트 등록, 네트워크 요청 같은 비동기 작업을 처리
5. `shouldComponentUpdate`
   - `props` 또는 `state` 변경 시, 리렌더링 시작 여부를 지정하는 메서드
   - 반드시 `true`,`false`를 반환 해야함.
   - 컴포넌트 만들때 해당 메서드를 생성하지 않을 경우 기본적으로 `true` 값을 반환하며, `false`를 반환하면  업데이트 과정을 중지됨.
   - 메서드 내부에서 현재 `props`와 `state` 는 `this.props`, `this.state`로 접근 가능하며 새로 설정될 `props` , `state`는 nextProps와 nextState로 접근 가능
6. `getSnapshotBeforeUpdate`
   - `render`에서 만들어진 결과물이 브라우저에 실제 반영되기 직전 호출됨
   - 메서드에서 반환 하는 값은 `componentDidUpdate` 에서 세번째 파라메터로 전달받을 수 있음
   - 업데이트 직전 값을 참고할 때 주로 사용
7. `componentDidUpdate`
   - 리렌더링 완료 후 실행
   - DOM 처리 가능
   - `prevProps`, `prevState` 파라메터를 사용하여 컴포넌트 이전 데이터 접근 가능
   - `snapshot` 파라메터를 통해 `getSnapshotBeforeUpdate` 에서 반환한 값 접근 가능
8. `componentWillUnmount`
   - 컴포넌트를 DOM 에서 제거할 때 실행
   - `componentDidMount`에서 등록한 이벤트, 타이머, 생성한 DOM 등 제거
9. `componentDidCatch`
   - 컴포넌트 렌더링 중 발생한 예외 처리하는 메서드
   - 컴포넌트 자신에게 발생하는 에러처리 불가 
   - 자신의 `this.props.children`으로 전달되는 컴포넌트에서 발생하는 에러만 처리 가능





### 

