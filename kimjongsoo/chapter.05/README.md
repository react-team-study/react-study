# Chpter.05 ref : DOM에 이름달기

### ref

- HTML 에서 id 라는 property를 사용하여 DOM 에 고유 이름을 할당하는 것 처럼 리액트 프로젝트 내부에서 DOM에 이름을 할당하는 개념.

- 리액트 컴포넌트 안에서도 id 를 사용할 수 있으나 컴포넌트가 재사용 가능하는 개념이 존재하기 때문에 중복 id를 가진 DOM이 여러개가 생길 수 있다는 문제가 존재한다. 
- ref의 경우 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동함으로 위에 해당하는 문제가 발생하지 않는다.



### ref 활용

- 특정 DOM 에 작업을 해야할 때 사용한다.
- DOM에 직접적으로 접근하여 제어하여야 할 때 주로 사용한다.
- Ex) 특정 input에 포커스 주기 , 스크롤 박스 조작하기 , canvas 요소에 그림 그리기 등.



### ref 사용

- 콜백 함수를 통한 ref 설정 : ref 를 달고자 하는 요소에 ref라는 콜백함수를 props로 전달

```jsx
/* this.input 은 input element의 DOM 을 가리킴*/
<input ref={(ref)=>{this.input=ref}}/> 
```

- createRef를 통한 ref 설정 : 리액트에 내장된 createRef 함수 사용 (react v16.3 ^ )

```react
import React, {Component} from 'react';

class RefSample extends Component {
	input = React.createRef();

	handleFocus = () => {
    this.input.current.focus();
    // callback 함수 사용과 다른점은 항상 .current 로 접근해야 한다.
  }
  
  render(){
    return (
      <div>
        <input ref={this.input}/>
      </div>
    );
  }
}

export default RefSample;
```



### 컴포넌트에 ref 달기

- 리액트에서는 컴포넌트에도 ref 를 달 수 있다. 
- 주로 컴포넌트 내부에 존재하는 DOM을 컴포넌트 외부에서 접근하여 사용할 때 사용한다.

```react
/* Sample 내부의 메서드 및 멤버변수 접근 가능, 내부의 ref 접근 가능 */

<Sample ref={(ref)=> {this.sample = ref}}/>
```





<b>ref를 사용하기전 ref를 사용하지 않고 원하는 기능을 구현할 수 있는지 여부를 판단하여 사용하여야 한다.</b>

<b>특히 주의해야할 점은 서로 다른 컴포넌트끼리 데이터를 교류할 때 ref를 사용하여서는 안된다.</b>

