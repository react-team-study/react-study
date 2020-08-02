import React, { Component, useState } from 'react';
import ColorBox from './chapter15/components/ColorBox';
// import ColorContext from './chapter15/contexts/color';
import { ColorProvider } from './chapter15/contexts/color';
import SelectColors from './chapter15/components/SelectColors';
import ColorBoxUsedHook from './chapter15/components/ColorBoxUsedHook';
import SelectColorsUsedStaticCtxType from './chapter15/components/SelectColorsUsedStaticCtxType';

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
    <ColorProvider>
      <div>
        {/* <SelectColors /> */}
        <SelectColorsUsedStaticCtxType />
        <ColorBoxUsedHook />
      </div>
    </ColorProvider>
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
