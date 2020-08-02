# Chapter.15 Context API



<b>리액트 프로젝트에서 전역적으로 사용할 데이터가 존재 시 유용한 기능</b>

- 일반적인 React App 의 경우 데이터는 위에서 아래 (부모 - 자식)로 props 를 통해 전달 되지만, context api 를 사용하면 트리 단계마다 명시적으로 props 를 넘기지 않고 많은 컴포넌트가 값을 공유할 수 있다.
- 애플리케이션 안의 여러 컴포넌트들에 전해줘야하는 props 의 경우 (사용자 로그인 정보. 애플리케이션 환경설정, 테마 등) 사용
- Redux, react-router, styled-components 등 라이브러리의 기반
- context API 는 다양한 레벨(계층)의 nesting 된 많은 컴포넌트에게 데이터를 전달하는 것으로 , context 를 사용하면 컴포넌트를 재 사용하기 어려워 진다는 점이 있기 때문에 상황에 따라 필요한 경우에만 사용하도록 주의 해야한다.



## API



#### React.createContext

```react
const MyContext = React.createContext(defaultValue);
```

- context 객체 생성
- context 객체를 구독하고 있는 컴포넌트 렌더링 시 React는 트리 상위에서 가장 가까이 있는 짝이 맞는 Provider에서 현재 값을 읽는다.



#### Context.Provider

```react
<MyContext.Provider value= {}>
```

- Context 객체에 포함된 컴포넌트
- context를 구독하는 컴포넌트들에게 context 변화를 전달하는 역할하는 컴포넌트
- Provider는 `value`  prop를 받아서 하위에 있는 컴포넌트에 전달하며, Provider 하위에 또다른 Provider를 배치하는 것이 가능한데 이때 전달되는 값의 기준은 전달 받는 컴포넌트에서 가장 가까운 Provider 값이 우선시 된다.
- Provider 하위에서 context를 구독하는 모든 컴포넌트는 Provider의 value prop가 변경될 때마다 리렌더링이 된다. Provider로부터 하위 Consumer`(.contextType, useContext 를 포함한)` 로의 전파는 `shouldComponentUpdate`  메서드가 적용되지 않으므로, 상위 컴포넌트가 업데이트를 건너 뛰더라도 consumer 가 업데이트 된다.



#### Context.Consumer

```react
<MyContext.Consumer>
	{value => {/* context 값을 이용한 렌더링 */}}
</MyContext.Consumer>
```

- context 변화를 구독하는 컴포넌트 
- 함수형 컴포넌트 안에서 context를 읽기 위해서 사용
- Context.Consumer의 자식은 함수여야 하며 `render props 패턴` , 이 함수는 context의 현재 값을 받고 React 노드를 반환한다. 이 함수가 받은 value 매개 변수 값은 해당 context의 Provider 중 상위 트리에서 가장 가까운 Provider의 value prop과 동일하다. 상위에 Provider 가 없다면 value 매개변수 값은 `createContext()`  에 보냈던 `defaultValue` 와 동일하다.



#### Class.contextType

- 클래스 컴포넌트에서 Context 객체를 <b>contextType</b> 프로퍼티로 지정할 수 있다.
- 클래스 컴포넌트 내부에서 `this.context` 를 이용해 해당 context 의 가장 가까운 Provider를 찾아 해당 값을 읽어 올 수 있으며, 이 값은 render 함수를 포함한 모든 컴포넌트 `life cycle api` 에서 사용할 수 있다.
- <b>contextType</b> 을 사용한 경우에는 하나의 context 만 구독할 수 있다.



