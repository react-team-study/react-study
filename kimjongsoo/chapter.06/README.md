# Chapter.06 컴포넌트 반복



### javascript map

```javascript
arr.map(callback, [thisArg])

/*
* callback : 새로운 배열의 요소를 생성하는 함수
*	- currentValue: 현재 처리하고 있는 요소
* - index: 현재 처리하고 있는 요소 index 값
* - array: 현재 처리하고 있는 원본 배열
*
* thisArg(선택항목): callback 함수 내부에서 사용할 this reference
*/
```



<b>javascript 내장 함수 map 을 통해 반복되는 컴포넌트를 간단하게 처리 할 수 있다. 주로 데이터 배열을 컴포넌트 배열로 변환할때 사용한다.</b>



```react
import React from 'react';

const IteratorSample = () => {
	const names = ['눈사람', '얼음', '눈', '바람'];
	const nameList = names.map(name => <li>{name}</li>);
	return <ul>{nameList}</ul>
}
```



### key

- key는 리액트가 내부적으로 컴포넌트 배열을 렌더링 했을때 어떤 배열 원소에서 상태 변화가 일어났는지 찾을때 사용한다.
- key값은 컴포넌트 내부에서는 고유해야 한다. 
- key를 사용할 때 가장 좋은 방법은 데이터의 id 문자열을 사용.



```react
/*
고유한 값이 없을때만 index 값을 key로 사용해야 한다.
index를 key로 사용하면 배열이 변경 될 때 효율적으로 리렌더링 하지 못함.
*/	
const articleList = articles.map(article => (
    <Article
      title={article.title}
      writer={article.writer}
      key={article.id}
      />));
```



### concat

- 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 <b>새로운 배열</b>을 반환한다.

```javascript
array.concat([value1[, value2[, ...[, valueN]]]])

/*
 인자가 없을 경우 기존 배열의 얕은 복사본을 반환
*/
```



### Filter

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```javascript
arr.filter(callback(element[, index[, array]])[, thisArg])

/*
callback: 각 요소를 테스트할 함수
 - element: 처리할 현재 요소
 - index: 처리할 현재 요소 index
 - array: filter를 호출한 배열
thisArg: callback을 실행할때 this로 사용한 값
*/
```



<b>상태 안에서 배열을 변형할 떄는 배열에 직접 접근하는 것이 아닌 concat, filter 등 내장 메서드를 활용하여 새로운 배열로 새로운 상태를 설정해주어야 한다.</b>

