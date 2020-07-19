import React, { useReducer } from "react";

function reducer(state, action) {
  // action 객체로 target dom element 가 이동
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoUserReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickName: "",
  });

  const { name, nickName } = state;

  const onChange = (e) => {
    console.log(e.target);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickName" value={nickName} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름: </b>
          {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickName}
        </div>
      </div>
    </div>
  );
};

export default InfoUserReducer;
