import React, { useState } from "react";

const IteratorSampleAdv = () => {
  const [people, setPeople] = useState([
    { id: 0, name: "KIM" },
    { id: 1, name: "LEE" },
    { id: 2, name: "CHOI" },
    { id: 3, name: "CHO" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = (e) => {
    setPeople(
      people.concat({
        name: inputText,
        id: nextId,
      })
    );
    setNextId(nextId + 1);
    setInputText("");
  };
  const onRemove = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const peopleList = people.map(({ id, name }) => (
    <li
      key={id}
      onDoubleClick={() => {
        onRemove(id);
      }}
    >
      {name}
    </li>
  ));

  //   const peopleList = people.map(({ id, name }) => (
  //     <li key={id} onDoubleClick={onRemove.bind(this, id)}>
  //       {name}
  //     </li>
  //   ));

  return (
    <div>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{peopleList}</ul>
    </div>
  );
};

export default IteratorSampleAdv;
