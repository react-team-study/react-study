import React, { Component } from 'react';
import './scss/global.scss';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';

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
            </>
        )
    }
}

export default App;
