import React from 'react';
import './App.css';

function App() {
  const name = '리액트';

  /*const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 //단위를 생략하면 px로 지정됩니다.
  };*/

  return (
    <div
      className="react" /*style={{
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px', // font-size -> fontSize
    fontWeight: 'bold', // font-weight -> fontWeight
    padding: 16 //단위를 생략하면 px로 지정됩니다.
    }}*/
    >
      {name}
    </div>
  );
}

export default App;
