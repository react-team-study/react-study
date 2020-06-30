import React, {Component} from 'react';
// import ValidationSample from './chapter.5/ValidationSample';
// import ScrollBox from './chapter.5/class/ScrollBox';
//import IterationSample from './chapter.6/func/IterationSample';
import LifeCycleSample from './chapter.7/LifeCycleSample';

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    state = {
      color : '#000000'
    }

    handleClick = () => {
      this.setState({
        color:getRandomColor()
      });
    }

    render(){
      return (
        <div>
          <button onClick={this.handleClick}>랜덤색상</button>
          <LifeCycleSample color={this.state.color}/>
        </div>
      );
    }
}

export default App;
