import React, { Component, useState } from 'react';

// import Sample from "./chapter3/Sample";
// import Counter from "./chapter3/Counter";
// import EventSample from "./chapter4/EventSample";
// import EventSampleFunc from "./chapter4/EventSampleFunc";
// import EventSampleFunc2 from "./chapter4/EventSampleFunc2";
// import ValidationSample from "./chapter5/ValidationSample";
// import ScrollBox from "./chapter5/ScrollBox";
// import IterationSample from "./chapter6/IterationSample";
// import IteratorSampleAddKey from "./chapter6/IteratorSampleAddKey";
// import IteratorSampleAdv from "./chapter6/IteratorSampleAdv";
// import LifeCycleSample from "./chapter7/LifeCycleSample";
// import ErrorBoundary from "./chapter7/ErrorBoundary";
// import Counter from "./chapter8/Counter";
// import Info from "./chapter8/Info";
// import InfoAsUseEffect from "./chapter8/InfoAsUseEffect";
// import CounterUseReducer from "./chapter8/CounterUseReducer";
// import InfoUserReducer from "./chapter8/InfoUserReducer";
// import Average from "./chapter8/Average";
// import AverageUseMemo from "./chapter8/AverageUseMemo";
// import AverageUseRef from './chapter8/AverageUseRef';
// import AverageUseCallback from './chapter8/AverageUseCallback';
// import InfoCustomHook from './chapter8/InfoCustomHook';
// import SassComponent from './chapter9/SassComponent';
// import CSSModule from './chapter9/CSSModule';i
// import StyledComponent from './chapter9/StyledComponent';
import TodoApp from './chapter11/TodoApp';

const App = () => {
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <SassComponent />}
  //   </div>
  // );
  return (
    <div>
      <TodoApp />
    </div>
  );
};

// class App extends Component {
//   render() {
//     return <InfoAsUseEffect />;
//   }
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// class App extends Component {
//   state = {
//     color: "#000000",
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>Color</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

export default App;
