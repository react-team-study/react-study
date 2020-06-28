import React, {Component} from 'react';
// import ValidationSample from './chapter.5/ValidationSample';
import ScrollBox from './chapter.5/class/ScrollBox';

class App extends Component {
    render() {
      return (
        <div>
          <ScrollBox ref={(ref) => this.ScrollBox = ref } />
          <button onClick = { () => this.ScrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
      );
    }
}

export default App;
