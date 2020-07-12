import React, { Component } from "react";
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
import LifeCycleSample from "./chapter7/LifeCycleSample";
import ErrorBoundary from "./chapter7/ErrorBoundary";

// function App() {
//   return <ValidationSample />;
// }

// class App extends Component {
//   render() {
//     return <LifeCycleSample />;
//   }
// }

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Color</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
