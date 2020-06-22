import React from 'react';
import logo from '../logo.svg';
import '../App.css';

function App() {

    //   return (//retrun
    //     <div className="App" /* react에서는 class를 className으로 명시한다. */>   
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   );


    /* 2.4.1 감싸인 요소 */
    // return (
    //     </* 컴포넌트에 여러요소가 있을시 반드시 부모 요소 하나로 감싸야 한다. */> 
    //         <h1>리액트 안녕!</h1>
    //         <h1>잘 동작하니?</h1>
    //     </>
    // );


    /* 2.4.2 자바스크립트로 표현 */
    // const name ='리액트';
    // return (
    //     <>
    //         <h1>{name} 안녕</h1>
    //         <h1>잘 작동하니?</h1>
    //     </>
    // );


    /* 2.4.3 IF문 대신 조건부 연산자 */
    // const name ='리액트';
    // return (
    //     <>
    //         {name === '리액트' ? (<h1>리액트입니다.</h1>) : (<h2>리액트가 아닙니다.</h2>)}
    //     </>
    // );


    /* 2.4.4 AND 연산자(&&)를 사용한 조건부 렌더링 */
    // const name ="뤼액트";   /* null값이나 false 랜더링시 null과 마찬가지로 아무것도 나타나지 않는다. */
    // return (<div>
    //             {name === '리액트' ? <h1>리액트입니다.</h1> : null} 
    //             {name ==='리액트' && <h1>리액트입니다.</h1>}
    //          </div>
    //         )


    /* 2.4.5 undifined를 렌더링 하지 않기 */
    // function App (){
    //     const name = undefined;
    //     return {name || {}}; // 만약 name 값이 undefined일 경우 빈 객체를 반환한다.
    // }


    /* 2.4.6 인라인 스타일링 */
    // const name = '리액트';
    // const style = {
    //     backgroundColor : 'black',
    //     color : 'aqua',
    //     fontSize : '48px',
    //     fontWeight : 'bold',
    //     padding : 16
    // };
    // return <div style={style}>{name}</div>    

    //2.4.7 class 대신 className
    // const name = '리액트';
    // return <div className='react'>{name}</div> // react에서는 class명시를 className으로 명시한다.
    
}

export default App;
