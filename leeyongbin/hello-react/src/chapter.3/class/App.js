import React,{Component} from 'react';
import Counter from './Counter';

// 3.1 클래스형 컴포넌트 클래스형
class App extends Component{ // Component 객체를 상속 받는다.
    render(){ // 클래스형 컴포넌트는 render 함수를 사용해야하며 내부에서 JSX를 반환해야 한다.
        const name ='리액트';
        // return <div className="react">{name}</div>;
        return <Counter/>
    }

}

export default App;