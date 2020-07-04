# Chapter.7 라이프 사이클 메서드의 이해

## 7.1

라이프 사이클 메서드의 종류는 총 아홉 가지이다.  
**Will** 접두사가 붙은 메서드는 어떤 작업을 작동하기 전 실행되는 메서드이고
 **Did** 접두사가 붙은 메서드는 어떤 작업을 완료한 후에 실행되는 메서드이다.  

**라이프사이클**은 총 세가지, 마운트, 업데이트, 언마운트 카테고리로 나뉜다.  

**Mound**는 Dom이 생성되고 웹 브라우저상에 나타나는 것을 말한다.  
**UnMount**는 컴포넌트를 DOM에서 제거하는 것을 말한다.

컴포넌트는 다음과 같은 총 네가지 경우에 업데이트 한다.
- props가 바뀔 때  
- state가 바뀔 때  
- 부모 컴포넌트가 리렌더링될 떄  
- this.forceUpdate로 강제로 렌더링을 트리거 할 때  

## 7.2.2 Constructor 메서드
- 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행
- 이메서드에서 초기 State를 설정할수 있음

## 7.2.3 getDerivedStateFromProps 메서드
- props로 받아 온 값을 state에 동기화시키는 용도로 사용.
- 컴포넌트가 마운트될 때와, 업데이트될 때 호출한다.

## 7.2.4 componentDidMount 메서드
- 컴포넌트를 만들고, 첫 렌더링을 마친 시점에 실행.
- 다른 자바스크립트 라이브러리 또는 프레임워크의 함수 호출를 호출하거나 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업을 처리할수 있다.

## 7.2.5 ShoudComponentUpdate 메서드
- props 또는 stateㅡㄹ 변경시, 리렌더링을 시작할지 여부를 지정하는 메서드.
- 이 메서드에서는 반드시 true값 또는 false값을 반환해야 한다.

## 7.2.6 getSnapshotBeforeUpdate 메서드
- render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에  호출된다.
- 주로 업데이트하기 직전의 값을 참고할 일이 있을때 활용 된다.

## 7.2.7 componentDidUpdate 메서드
- 리렌더링을 완료한 후에 실행.
-  prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터에 접근 할 수 있다.

## 7.2.7 componentWillUnmount 메서드
- 컴포넌트를 Dom에서 제거할 때 실행. (componentDidMount에서 등록한 이벤트,타이머, 직접 생성한 DOM등)

## 7.2.9 componentDidCatch 메서드
컴포넌트 랜더링 도중 에러가 발생했을때 오류 UI를 보여줄수 있게 해주는 메서드




