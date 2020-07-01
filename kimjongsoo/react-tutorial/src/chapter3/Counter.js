import React, { Component } from "react";

class Counter extends Component {
  /*
	constructor(props) {
    // 클래스형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를 호출 해주어야함.
    // 리액트의 Component 클래스가 지닌 생성자 함수를 호출 해줌
    super(props);
    // state 초기값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  */

  // constructor 를 사용하지 않고 state 초기값 설정
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state 조회 시 this.state로 조회

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState 를 사용하여 state에 새로웅 값을 넣을 수 있음.
            // this.setState({ number: number + 1 });
            // this.setState 함수는 비동기
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
            /**
             * 위와 동일
             * this.setState(prevState => {
             * return {number: prevState.number + 2}
             * });
             */

            /**
             * 콜백함수 호출
             */

            this.setState({ number: number + 1 }, () => {
              console.log("complete");
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
