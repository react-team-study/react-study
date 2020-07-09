import React, { Component } from 'react';
import './scss/global.scss';
import TodoTemplate from './components/TodoTemplate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <>
                <TodoTemplate>
                    
                </TodoTemplate>
            </>
        )
    }
}

export default App;
