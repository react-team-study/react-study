# Chapter.8 Hooks



### Hooks?

리액트 v16.8 이후 새로 도입된 기능으로 <b>함수형 컴포넌트에서도 상태관리 및 렌더링 직후 작업</b>을 설정하는 기능 (클래스 컴포넌트에서 사용하는 lifeCycle API)을 제공.



### 리액트 내장 Hooks

1. useState

- 가장 기본적인 Hook.
- 함수형 컴포넌트에서도 가변적인 상태를 지니도록 해줌. (state 관리 )

```react
/*
	useState 메서드는 인자로 초기값을 받고, 현재 상태(value)와 현재 상태를 업데이트할 수 있는 함수(setValue)를 반환해줍니다.
*/

const [value, setValue] = useState(initalValue);
```



2. useEffect

- 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook.
- 클래스형 컴포넌트의 componentDidMount 와 ComponentDidUpdate 를 합친 형태로 볼 수 있다.

```react
/*

useEffect 메서드는 첫번째 인자 effect 함수 받고, 두번째 인자로 받은 배열을 받는다.

rendering 할 떄마다 effect 함수가 호출되며, 두번째 인자로 빈 배열이 아닌 특정 상태 값이 들어있다면 
해당 특정 상태값이 변경될때만 effect 함수가 호출 된다.

*/

function useEffect(effect: EffectCallback, inputs?: InputIdentityList)


/* 
컴포넌트가 언마운트 되기 전 혹은 업데이트 되기 직전에 어떠한 작업을 수행하려면 useEffect에서 cleanup 함수를 반환 해주어야 한다.
*/

useEffect(()=>{
  console.log('effect');
  return ()=>{
    console.log('cleanup');
  };
});

```



3. useReducer

- useState 보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해주기 위해 사용하는 Hook.
- reducer 는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(Action 객체) 값을 전달 받아 새로운 상태(state 객체)를 반환 하는 함수.

```react
/*
 useReducer 의 첫번째 인자는 리듀서 함수를 받고 두번째 인자는 해당 리듀서의 기본 값을 받아서 state 값과 dispatch 함수를 반환한다.
 
 state: 현재 상태
 dispatch :  액션을 발생시키는 함수, 액션객체를 인자로 받으면 리듀서 함수를 호출 해준다.
*/

const [state, dispatch] = useReducer(reducer, state: {});
```



4. useMemo

- 일반적으로 함수형 컴포넌트 내부에서 발생하는 연산 최적화에 많이 사용하는 Hook

```react
/*
 첫번쨰 인자로 생성(create)함수, 두번째 인자로 그것의 의존성 값의 배열을 받아서 메모제이션된 값을 반환한다.
 
 의존성이 변경되었을 때에만 메모이제이션된 값을 다시 계산 한다.
*/

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

useMemo(()=>{
  const Fn = ()=>{
  console.log('example');
	};
  
  return Fn;
});
```



5. useCallback

- 주로 렌더링 성능을 최적화 해야하는 상황에서 사용하는 Hook
- useCallback Hook 을 통해 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다.

```react
/*
	useCallback 첫번째 인자에는 생성하고 싶은 함수를 받고, 두번째 인자로 배열을 받는다. 
	
	두번째 인자의 배열은 어떤 상태가 변경되었을때 함수를 새로 생성해햐는지 (상태이름)를 명시 해주어야 한다.
	
	두번째 인자를 빈배열로 전달하면 컴포넌트가 처음 렌더링 될때만 함수를 생성한다.
*/

useCallback(Fn, [])

useCallback(()=>{console.log('example');}, [])
```



6. useRef

- 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해주는 Hook.
- 컴포넌트 로컬 변수를 사용할 때도 활용 가능 하다.



### Custom Hooks 

- 여러 컴포넌트에서 사용하는 공통 기능을 Custom Hook 으로 분리하여 작성이 가능하며,  재사용할 수 있다.