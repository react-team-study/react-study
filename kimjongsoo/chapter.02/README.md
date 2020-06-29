# Chaper.2  JSX



## JSX 란

- JSX 는 자바스크립트의 확장 문법으로 XML 과 비슷한 형태
- JSX는 실행되기 전 코드가 번들링 되는 과정에서 바벨을 통해 자바스크립트 코드로 변환



### JSX 장점

- 가독성 및 익숙함
- HTML 태그 와 동일하게 사용할 수 있어 활용도가 높음



### JSX 문법

1. 감싸인 요소

- 컴포넌트에 여러 요소 존재 시 반드시 부모 요소 하나로 감싸야함.

  ```jsx
  import React from 'react';
  
  function exam(){
  return (
  	<div>
  		<h1>test</h1>
  		<p>테스트입니다.<p>
  	</div>
  	)
  }
  ```

  1. Virtual DOM에서 컴포넌트 변화를 감지해 낼 때 효율적으로 비교하기 위해 컴포넌트 내부는 하나의 DOM 트리 구조로 이루어 져야한다는 규칙이 존재하기 때문에 꼭 부모요소로 감싸주어야 한다.

  2. 리액트 v16 부터는 Fragment 라는 기능을 사용할 수 있다.

  ```jsx
  import React, {Fragment} from 'react';
  
  function FragmentExam(){
  	return(
  		<Fragment>
      	<h1>test</h1>
      	<p>테스트입니다.</p>
      </Fragment>
  	) 
  }
  
  // 위와 동일
  function anotherExam(){
    	return (
      	<>
        	<h1>test1</h1>
        	<p>테스트 입니다.</p>
        </>
      )
  }
  ```

2. 자바스크립트 표현

- JSX 내부에서 자바스크립트 코드를 {} 로 감싸서 표현식을 사용할 수 있다.

```
import React from 'react';

function jsInJSXExam(){
	const name = 'javascript';
	
	return (
		<>
			<h1>{name} Hello </h1>
			<h2>테스트 입니다.</h2>
		</>
	)
}
```

3. 조건부 연산자

- JSX 내부에서는 if문 사용 불가
- 조건문을 사용하기 위해서는 JSX 외부에서 사용하거나 JSX 내부에서 조건부 연산자를 사용해야 한다.

```jsx
import React from 'react';

function condition(){
  const name = "테스트"
	return (
    <div>
		{name === '테스트' ? (
     	<h1>성공</h1>
     ):(
    	<h1>실패</h1>
  	)}
    </div>
	)

}
```

4. AND 연산자 (&&)를 사용한 조건부 렌더링

- 특정 조건 만족하지 못할 시 화면에 아무것도 렌더링 되지 않아야 하는 상황이 필요할때 흔히 사용

```jSX
/*
	null 을 사용하여 화면 렌더링되지 않도록 처리
*/
import React from 'react';

function App(){
  const flag = true;
  
  return <div>{flag ? <h1>성공 입니다.</h1>: null}</div>
}

export default App;
```

- 리액트에서 false를 렌더링 하는 경우 null과 같은 결과가 나오므로 && 조건부 렌더링이 가능하다.
- 0의 경우는 예외적으로 화면이 나타난다.

```jsx
/*
	&& 연산자 활용
*/
import React from 'react';

function App(){
  const flag = true;
  
  return <div>{flag&&<h1>성공 입니다.</h1>}</div>
}
```

5. undefined 렌더링 금지

- 리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링되는 상황을 만들면 코드 오류가 발생함.

```jsx
/*
	오류 코드
*/
import React from 'react';

function App(){
  const name = undefined;
  return name;
}

export default App;
```

```jsx
/*
	오류 방지 코드
*/
import React from 'react';

function App(){
  const name = undefined;
  return name || false;
}

export default App;

```

- JSX 내부에서 undefined를 렌더링하는 경우는 오류가 발생하지 않는다.

```jsx
import React from 'react';

function App(){
  const name = undefined;
  return <div>{name}</div>
  //return <div>{name || false}<div>
}

export default App;
```

6. 인라인 스타일링

- 리액트의 경우 DOM 요소에 스타일을 적용할 때는 문자열 형태로 넣는 것이 아니라 객체 형태로 넣어야 함.

- 스타일 이름 중 - 문자로 포함되어 있는 이름의 경우 카멜 표기법으로 작성 

  Ex) background-color == backgroundColor

```jsx
import React from 'react';

function App(){
  const name = 'tutorial';
  const style= {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '48px',
    fontWeight:'bold'
  };
  return <div style={style}>{name}</div>
  // return <div style={{
	//	backgroundColor: 'black',
  // 	color: 'white',
  // 	fontSize: '48px',
  // 	fontWeight:'bold'		
	//	}}>{name}</div>
}
```

7. class 대신 className

- css의 class는 JSX 에서는 className 으로 설정하여 사용한다.

```jsx
/*
 react 16버전 부터는 코드 오류는 나지 않고 className 으로 변환처리 해줌.
 warning 메시지 출력됨.
*/
import React from 'react';
import './App.css';

function App(){
	const name = 'tutorial';
  return <div className="test">{name}</div>
}
```

8. 꼭 닫아야 하는 태그

- 기존 HTML 작성 시 태그를 닫지 않은 상태로 코드를 작성하는 경우가 존재하지만 JSX 에서는 태그를 닫지 않으면 코드 오류가 발생한다.

- 반드시 태그를 닫아주도록 한다.

- self-closing 태그 : 태그 사이에 별도의 내용이 없을 시 선언과 동시에 닫을 수 있는 태그.

  Ex) <input/>

9. 주석

```jsx
import React from 'react';
import './App.css';

function App(){
  const name = 'tutorial';
  return (
  	<>
    {/* 주석 처리*/}
    </>
  )
}
```





