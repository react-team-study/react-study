import React, { Component } from 'react';
import './scss/global.scss';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';
import IterationSample from './components/IterationSample';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <>
                <MyComponent name={'곽규현'} favoriteNumber={3}>리액트</MyComponent>
                <Counter />
                <Say />
                <EventPractice />
                <ValidationSample />
                <ScrollBox />
                <IterationSample />
            </>
        )
    }
}

export default App;
