import React from 'react';
import CounterContainer from './containers/CounterContainer';
import TodosContainter from './containers/TodosContainter';

function App() {
  return (
    <>
      <CounterContainer />
      <hr />
      <TodosContainter />
    </>
  );
}

export default App;
