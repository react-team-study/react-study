# Chapter.16 리덕스 라이브러리 이해하기



### Redux

- 상태관리 라이브러리
- 리덕스를 사용하면 컴포넌트 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 효율적으로 관리 할 수 있다.
- 전역 상태를 관리 할 때 굉장히 편리하며, 프로젝트의 규모가 커질 수록 효용성이 크다. 
  

### Redux 원칙

- `Single source of truth` : 앱 전체는 단일 스토어로 관리
- `State is read only`: 상태는 읽기전용. 상태를 변경하기 위해서는 액션객체를 이용하여 액션을 발생 시켜야 한다.
- `Changes are made with pure functions`: 상태의 변화를 일으키기 위해서는 reducer를 사용한다. reducer는 이전의 상태와 액션을 받아서 다음 상태를 반환 하는 함수로서 순수 함수로 구현해야한다.


### Redux 사용하는 이유

- 모던 자바스크립트 SPA 에서 예전보다 많은 인터렉션 및 복잡한 데이터를 사용하면서 클라이언트에서 관리해야할 상태들이 많아지고 복잡해짐에 따라 더욱 필요하게 되었다.
- 상태 관리 라이브러리 중 대표적인 Redux 는 데이터가 집중화되어 있어 (단일 스토어) 예측 가능하며 데이터 흐름이 단방향이기 때문에 디버깅이 쉽다. 특히 Redux는 거의 동일한state 개념(ex) read-only, setState() )이 존재하는 react 와 함께 사용하기 좋다.



### Redux 기본요소

![screenshot](/Users/hongsam/github/react-study/kimjongsoo/chapter.16/redux-process.png)

> http://learning-react.com/5ac15/redux.html



#### 1. Action

```react
{
	type: 'TOGGLE_VALUE'
}
```

- 상태에 어떠한 변화가 필요한 경우 발생하는 객체
- 액션 객체는 type 필드를 반드시 가지고 있어야함.
- 그 외의 값들은 임의대로 할당할 수 있다.
  

#### 2. Action Creator

```react
function addTodo(data){
	return type: 'ADD_TODO'
}
```

- 액션 객체를 만들어주는 함수
  

#### 3. Reducer

```javascript
const initialState = {
	counter: 1
}

function reducer (state = initialState, action){
    switch (action.type){
    		case INCREMENT:
    				return {
    						counter: state.counter + 1
    				};
      default:
        		return state;
    }
}
```

- 변화를 발생시키는 함수
- 액션을 만들어서 발생 시키면 리듀서 함수는 현재 상태, 전달된 액션 객체를 파라메터로 받아 새로운 상태를 반환한다.
  

#### 4. Store

- 내부에 현재의 Application 상태와 reducer를 가지고 있다.
- 이외 몇가지 내장함수를 지원한다.
  

#### 5. Dispatch

- Store 의 내장함수 중 하나로 Action 을 발생 시킨다.
- 해당 함수는 Action을 파라메터로 받아 호출 되면 Store에서 Reducer 함수를 실행시켜 해당 Action을 처리하는 로직 존재 시 새로운 상태로 만들어 준다.
   

#### 6. Subscribe

- Store의 내장함수 중 하나
- 해당 함수는 함수 형태의 값(리스너 함수)을 파라미터로 받아와서 Action이 디스패치 되었을 때 (상태가 업데이트되었을때) 전달받은 함수가 호출된다.



### Redux 규칙



#### 1. 단일스토어 

- 하나의 Application 하나의 Store
- 여러개의 스토어가 불가능 한 것은 아니지만 상태관리가 복잡해짐으로써 Redux를 사용하는 의미가 퇴색함.
  

#### 2. 읽기 전용 상태

- 리덕스도 마찬가지로 불변성을 유지해야함.
- 내부적으로 데이터 변경 감지를 위해 얖은 비교 검사를 하기 때문에 기존 상태 객체가 아닌 새로운 상태 객체를 뱐환 해줌으로써 상태 변화를 전달해야함.
  

#### 3. Reducer 순수한 함수

- 리듀서 함수는 이전 상태와 액션객체를 파라메터로 받는다.
- 파라미터 외 값과 의존성을 가지지 않는다.
- 이전 상태를 직접 접근하여 변경하지 않고, 항상 새로운 상태를 반환하여 불변성을 유지해야한다.
- 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환 해야한다.