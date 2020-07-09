import React, { Component } from 'react';
import './scss/global.scss';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';
import IterationSample from './components/IterationSample';
import LifeCycleSample from './components/LifeCycleSample';
import ErrorBoundary from './components/ErrorBoundary';
import CounterUsingHook from './components/CounterUsingHook';
import Info from './components/Info';
import Average from './components/Average';

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '#000',
        }
    }
    
    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        })
    }
    
    render() {
        const { color } = this.state;
        return (
            <>
                <MyComponent name={'곽규현'} favoriteNumber={3}>리액트</MyComponent>
                <Counter />
                <Say />
                <EventPractice />
                <ValidationSample />
                <ScrollBox />
                <IterationSample />
                <ErrorBoundary>
                    <LifeCycleSample color={color} />
                    <button
                        type="button"
                        onClick={this.handleClick}
                        style={{ fontSize: '18px', width: '100px', display: 'block', margin: '-10px auto', padding: '10px' }}
                    >
                        색상변경
                    </button>
                </ErrorBoundary>
                <CounterUsingHook />
                <Info />
                <Average />
            </>
        )
    }
}

export default App;
