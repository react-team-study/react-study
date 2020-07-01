import React, { useState } from "react";

const Say = () => {
  /**
   * useState	함수의 인자에 상태의 초기값을 넣어줌
   * 클래스형 컴포넌트와 달리 state 초기값은 객체가 아니어도 상관 없음
   * useState 함수 호출 시 배열을 반환
   * 반환된 배열의 첫번째 원소는 현재 상태, 두번째 원소는 상태를 바꾸어 주는 함수(setter 함수)
   * 한 컴포넌트에서 useState는 여러번 사용할 수 있다.
   */
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕하세요");
  const onClickLeave = () => setMessage("안녕히 가세요");
  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}></button>
      <button
        style={{ color: "blue" }}
        onClick={() => setColor("blue")}
      ></button>
      <button
        style={{ color: "green" }}
        onClick={() => setColor("green")}
      ></button>
    </div>
  );
};

export default Say;
