# chapter.03 컴포넌트

### Component 란

- 컴포넌트는  각 부분을 재사용 가능한 조각으로 UI 를 나눈 것과 동일함.
- 리액트



### 컴포넌트 생성

1. 클래스형 컴포넌트

```react
import React from 'react';
import './App.css';

class App extends Component {
    render(){
        const name = 'tutorial';
        return <div className="app">{name}</div>
    }
}

export default App;
```

- 선언

  - 클래스형 컴포넌트 생성시 render 함수를 반드시 포함.

  - render 함수는 JSX 를 반환해야 함.

- 장점

  - state 기능 및 라이프 사이클 API 사용 가능
  - 임의 메서드를 정의 할 수 있음



2. 함수형 컴포넌트

```react
import React from 'react';
import './App.css';

function App(){
   const name = 'tutorial';
    return <div className="app">{name}</div>
}

export default App;
```

- 장점
  - 클래스형 컴포넌트와 비교하여 선언이 비교적 간단함.
  - 메모리 자원도 덜 사용함.
  - 빌드 및 배포 시 결과물의 크기가 작음 (사실상 미미함.)
- 단점
  - state 와 라이프사이클 API 사용이 불가능함. (React v16.8 기준 hooks 사용시 가능)



<b>React 공식 메뉴얼에서는 함수형 컴포넌트와 Hooks 사용을 권장함.</b>



### props

- props는 properties 를 줄인 표현으로 컴포넌트 속성 설정시 사용하는 요소
- 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있다.
- 클래스 형 컴포넌트의 경우에는 render 함수에서 this.props 를 조회하여 사용한다.

```react
import React from 'react';

const TestComponent = props => {
  return <div>{props.value}</div>
}

export default TestComponent;
```



```react
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Sample extends Component{
  /*
  static defaultProps = {
    name: 'react'
  };
	static propTypes = {
   	name: PropTypes.string,
    num: PropTypes.number.isRequired
  };
  */
	render(){
    const {name, num. children} = this.props
    return  <div>{name}{num}{children}</div>;
  }
}

Sample.defaultProps = {
  name: '기본이름'
};

Sample.propTypes ={
  name: PropTypes.string,
  num: PropTypes.number.isRequired
};

export default Sample
```



1. props 기본값 설정

- props 값을 따로 지정하지 않을때 보여줄 기본값을 설정할때는 defaultProps 를 사용한다.

```react
import React from 'react';

const TestComponent = props => {
  return <div>Hello, {props.name}</div>
};

TestComponent.defaultProps = {
  name: 'react'
};

export default TestComponent;
```

2. children

- 컴포넌트 태그 사이의 내용을 보여주는 props

3. 비구조화 할당 

- Javascript 비구조화 할당 문법을 통해 props 내부 값을 바로 추출 할 수 있다.

```react
import React from 'react';

const TestComponent = (props) => {
  const {name, children} = props;
  
  return <div>{name}/{children}</div>
}

export default TestComponent;
```

4. propTypes 

- 컴포넌트 필수 props 를 지정하거나 타입을 지정할때 사용
- propTypes 의 지정할 수 있는 타입은 기본적인 javascript data type 외 여러가지가 존재함.

```react
import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = ({name,num,children}) =>{
	return <div>{name} / {children}</div>
}

TestComponent.defaultProps = {
  name: 'react'
}

TestComponent.propTypes = {
  name: PropTypes.string,
  num: PropTypes.number.isRequired
}


export default TestComponent;
```



### state

컴포넌트 내부에서 바뀔수 있는 값

`state`와 비교하면 `props` 는 부모 컴포넌트가 설정하는 값이며, 컴포넌트 자신은 `props`를 읽기 전용으로만 사용할 수 있다. `props`를 변경하려면 부모컴포넌트에서 바꿀 수 있다.

`state`는 클래스형 컴포넌트가 가지고 있는 state 와 함수형 컴포넌트에서 `useState`라는 함수를 통해 사용하는 `state` 두가지 종류가 있다.

클래스형 컴포넌트는 `setState` , 함수형 컴포넌트에서는 `useState` 라는 setter 함수를 사용하며, 이 함수들은 상태를 비동기적으로 업데이트 한다.

setState는 콜백패턴을 통해 상태 업데이트 후 처리가 가능하지만 useState의 경우 호출뒤 반환한 setter 함수에 콜백패턴이 없으므로 클래스 컴포넌트에서  `componentDidUpdate`를 사용하는 것과 유사하게 useEffect Hooks를 사용해야합니다.



1. setState

```js
/*setState(updater[, callback])의 콜백 함수가 실행된 후 리렌더링 된다*/
setState(updater[, callback])
```



2. useState

```js
const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);
```

### state 사용 시 주의 사항

<b>state 값을 바꿀때는 항상 setter 함수를 통해 변경해야한다.</b>



```react
import React, {useState} from 'react';

const Sample = () => {
  const [object, setObject] = useState({a: 1, b: 1});
  
  const nexObject = {...object, b:2};
  setObject(nextObject);
  
  const [arr, setArr] = useState([1,2,3]);
  
  const nextArr = arr.concat([5,6,9]);
  nextArr.filter(item => item !== 2);
  nextArr.map(item => item === 1 ? item *= 10 : item)
  setArr(nextArr);
  
  
  return <div></div>
}

```





