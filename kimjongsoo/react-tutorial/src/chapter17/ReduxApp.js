import React from 'react';
// import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';
import TodosContainerInUseActions from './containers/TodosContainerInUseActions';
import CounterCiontainerInHook from './containers/CounterContainerInHook';

const ReduxApp = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      <CounterCiontainerInHook />
      <hr />
      {/* <TodosContainer /> */}
      <TodosContainerInUseActions />
    </div>
  );
};

export default ReduxApp;
