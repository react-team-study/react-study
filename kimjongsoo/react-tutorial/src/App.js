import React, { Component, useState } from 'react';
import AsyncApp from './chapter18/AsyncApp';
import SplitApp from './chapter19/SplitApp';

// const App = () => {
//   return (
//     <div>
//       <ColorBox />
//     </div>
//   );
// };
/**
 * chapter15 context api
 */
const App = () => {
  return (
    // <ColorContext.Provider value={{ color: 'red' }}>
    // <ColorProvider>
    <div>
      <SplitApp />
    </div>
    // </ColorProvider>
    // </ColorContext.Provider>
  );
};
/**
 * class component
 */

// class App extends Component {
//   render() {
//     return <InfoAsUseEffect />;
//   }
// }

/**
 * conditional rendering
 */

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? '숨기기' : '보이기'}
//       </button>
//       <hr />
//       {visible && <SassComponent />}
//     </div>
//   );
//   return (
//     <div>
//       {/* <TodoApp /> */}
//       <FormUsedImmerUpdateFunc />
//     </div>
//   );
// };

// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

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
