import React, { useState, useEffect } from "react";

const InfoAsUseEffect = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  //   useEffect(() => {
  //     console.log("렌더링 완료");
  //     console.log({
  //       name,
  //       nickName,
  //     });
  //   });

  //   useEffect(() => {
  //     console.log("마운트 될때만 실행됩니다.");
  //   }, []);

  /**
   * 아래 useEffect와 동일
   * componentDidUpdate(prevProps, prevState){
   * 	if(prevProps.value !== this.props.value){
   * 		doSomething();
   * 	}
   * }
   */
  //   두번째 파라메터를 통해 실행조건이 달라짐
  //   useEffect(() => {
  //     console.log(name);
  //   }, [name]);

  //   useEffect(() => {
  //     console.log("마운트 될때만 실행됩니다.");
  //   }, []);

  //   cleanup

  useEffect(() => {
    console.log("effect");
    // console.log(name);
    return () => {
      console.log("cleanup");
      //   console.log(name);
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={onChangeName}></input>
      <input value={nickName} onChange={onChangeNickName}></input>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default InfoAsUseEffect;
