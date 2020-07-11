import React from "react";

const IteratorSampleAddKey = () => {
  const names = ["a", "b", "c", "d"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return <div>{nameList}</div>;
};

export default IteratorSampleAddKey;
