# Chapter.12 immer를 사용하여 더 쉽게 불변성 유지하기



### immer 사용법



```react
import produce from 'immer';

const nextState = produce(originalState, draft => {
  draft.somewhere.deep.inside = 5;
})
```

- 첫 번째 파라미터는 수정하고 싶은 상태, 두 번째 파라미터는 상태 업데이트 함수
- 두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면 immer 내부적으로 불변성처리를 해주기 때문에 코드 작성 시에는 일반적으로 불변성을 신경쓰지 않고 자유롭게 코드작성할 수 있다는 장점이 있다.
- 특히 상태값의 내부 구조가 복잡할 수록 코드를 간결하게 작성 할 수 있다.



### immer + useState 함수형 업데이트



```react
import produce from 'immer';

const update = produce(draft => {
draft.value = 2;
})

const originalState = {
value: 2,
foo: 'bar'
};

const nextState = update(originalState);
```

- immer를 사용하면서 useState의 함수형 업데이트를 사용할 수 있다.
- immer 에서 제공하는 produce 함수를 호출할 때, 첫 번쨰 파라미터가 함수 형태라면 업데이트 함수를 반환한다.