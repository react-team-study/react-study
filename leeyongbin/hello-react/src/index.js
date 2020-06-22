import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './chapter.2//App'; //chapter.2
import App from './chapter.3/func/App'; //chapter.3 함수형 컴포넌트
//import App from './chapter.3/class/App'; //chapter.3 함수형 컴포넌트
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
