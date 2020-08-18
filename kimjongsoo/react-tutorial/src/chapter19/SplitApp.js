import React, { Component, useState, Suspense } from 'react';
import logo from '../logo.svg';
import '../App.css';
import loadable from '@loadable/component';

// import notify from "./notify";
/* 일반적 비동기 함수 로딩
function SplitApp() {
  const onClick = () => {
    import('./notify').then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

*/

/* React.lazy , suspense
const SplitMe = React.lazy(() => import('./SplitMe'));
function SplitApp() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <suspense fallback={<div>lodaing...</div>}>
          {visible && <SplitMe />}
        </suspense>
      </header>
    </div>
  );
}
*/

/* Loadable Components
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});
function SplitApp() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}
 */

// /* code preload
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>,
});
function SplitApp() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}
//  */

/* state 사용
class SplitApp extends Component {
  state = {
    SplitMe: null,
  };
  handleClick = async () => {
    const loadedModule = await import('./SplitMe');
    this.setState({
      SplitMe: loadedModule.default,
    });
  };
  render() {
    const { SplitMe } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handleClick}>Hello React!</p>
          {SplitMe && <SplitMe />}
        </header>
      </div>
    );
  }
}
*/
export default SplitApp;
