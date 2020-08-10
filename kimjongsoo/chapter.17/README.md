# Chapter.17 리덕스를 사용하여 리액트 애플리케이션 상태 관리하기



## React + Redux 

![Redux Design Pattern](https://s3.eu-west-2.amazonaws.com/websitegiamir/redux-design-pattern.png)

### 리덕스 3가지 규칙

1. 하나의 애플리케이션 안에는 하나의 스토어가 존재한다.
2. 상태는 읽기 전용이다. (불변성)
3. 변화를 일으키는 함수인 리듀서는 순수한 함수여야 한다.



### 리덕스 장점

1. 데이터가 집중화 되어 있어 예측이 가능하며 데이터 흐름이 단방향이라서 디버깅이 쉽다.
2. 리덕스와 연관된 좋은 생태계가 구축되어 있어서 필요에 맞게 유연하게 구현할 수 있다.



### 리덕스 단점

1. 적지 않은 코드량 





![Presentational and Container components pattern](https://s3.eu-west-2.amazonaws.com/websitegiamir/presentational-container-components.png)



> https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0



### 프레젠테이션 컴포넌트

보여지기 위한 컴포넌트로 상태관리가 이루어지지 않고, 단순히 props를 받아 와서 화면 UI를 보여주는 컴포넌트



### 컨테이너 컴포넌트

리덕스와 연동되어 있는 컴포넌트로 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.





### Duck 패턴

Redux 를 사용하면 기능별로 여러개의 액션타입과 액션, 리듀서 한 세트를 만들어야 하고, 일반적으로 여러개의 폴더로 나누어지기 때문에, 하나의 기능을 수정할 때 여러 파일을 수정해야하는 불편함이 생긴다.

<b>이에 따라 액션타입, 액션 생성함수, 리듀서 함수를 기능별로 파일 하나에 몰아서 작성하는데 이를 보통 Duck 패턴이라 한다.</b>



### Duck 패턴 규칙

1. 하나의 모듈은 항상 `reducer()`란 이름의 함수를 `export default` 해야한다.
2. 하나의 모듈은 항상 모듈의 action 생성자들을 함수 형태로 `export` 해야한다.
3. 하나의 모듈은 항상 `npm-module-or-app/reducer/ACTION_TYPE` 형태의 action 타입을 가져야한다.
4. 어쩌면 action 타입들을 `UPPER_SNAKE_CASE`로 `export` 할 수 있다.











