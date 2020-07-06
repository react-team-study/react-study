import React, { Component } from "react";
// import Sample from "./chapter3/Sample";
// import Counter from "./chapter3/Counter";
// import EventSample from "./chapter4/EventSample";
// import EventSampleFunc from "./chapter4/EventSampleFunc";
// import EventSampleFunc2 from "./chapter4/EventSampleFunc2";
import ValidationSample from "./chapter5/ValidationSample";
import ScrollBox from "./chapter5/ScrollBox";

// function App() {
//   return <ValidationSample />;
// }

class App extends Component {
  render() {
    // return <ValidationSample />;
    return (
      <div>
        <ScrollBox
          ref={(ref) => {
            this.scrollbox = ref;
          }}
        />
        <button onClick={() => this.scrollbox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
