import React from 'react';
// import Todos from './components/Todos';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';
import TodosContainerInUseActions from './containers/TodosContainerInUseActions';
import CounterCiontainerInHook from './containers/CounterContainerInHook';
import TodosContainerInHook from './containers/TodosContainerInHook';

const ReduxApp = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      <CounterCiontainerInHook />
      <hr />
      <TodosContainer />
      {/* <TodosContainerInHook /> */}
      {/* <TodosContainerInUseActions /> */}
    </div>
  );
};

export default ReduxApp;
