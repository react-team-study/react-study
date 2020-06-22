import React from 'react';
// import '../../App.css'
//import MyComponent from './MyComponent';
import Say from './Say';

// 3.1 클래스형 컴포넌트 (함수형)
// function App (){
//     const name = '리액트';
//     return <div className='react'>{name}</div>;
// }

//3.2.3.2 모듈 불러오기(import) 
// const App = () => {
//     return <MyComponent />
// }

//3.3.2 컴포넌트를 사용할 때 props값 지정하기
// const App = () => {
//     return <MyComponent name="React" favoritNumber={90}>리액트</MyComponent>
// }

//3.4.2.2 useState 사용하기
const App = () => {
    return <Say/>
}




export default App;