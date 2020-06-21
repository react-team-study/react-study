import React,{Component} from 'react';

class Counter extends Component{
    
    // constructor(props){ // 컴포넌트 생성자 메서드, Counter 컴포넌트가 상속받는 Component 클래스가 지닌 생성자 함수를 호출한다. 
    //     super(props);   // 컴포넌트 생성자 메서드 사용시 super 호출
    //     this.state = {  // 컴포넌트 state 초기값 생성
    //         number1 : 0,    
    //         number2 : 0 
    //     };
    // }

    //3.4.1.2 state를 constructor에서 꺼내기
    state = { //state 초기화 (생성자를 사용 하지않고도 state를 초기화할수 있음)
        number1 : 0,
        number2 : 0,
        fixedNumber : 0
    };

    render() {
        //3.4.11 state 객체안  여러 값이 있을 때
        const {number1, number2, fixedNumber} = this.state;  // state number1,number2 비구조 할당
        return (
            <div>
                <h1>{number1}</h1>
                <button onClick={() => {this.setState({number1 : number1 + 1},() =>{alert('값이 증가하였습니다.')})}} >
                    +1
                </button>
                <h1>{fixedNumber}</h1>
                <h1>{number2}</h1>
                <button onClick={() => {this.setState({number2 : number2 - 1},() =>{alert('값이 감소하였습니다.')})}}>
                    -1  
                </button>                
            </div>
        );
    }

    // 동일한 표현
    // <button onClick= {() => {
    //     1.  this.setState(preState =>{
    //             return {
    //                 number : prevState.number +1;
    //             };
    //         });

    //     2.  this.setState(prevState => {
    //             number : prevState.number + 1
    //         });
    // }}/>

}

export default Counter;