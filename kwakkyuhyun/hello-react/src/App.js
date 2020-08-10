import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './scss/global.scss';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import History from './components/History';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to='/'>홈</Link>
                    </li>
                    <li>
                        <Link to='/about'>소개</Link>
                    </li>
                    <li>
                        <Link to='/history'>history</Link>
                    </li>
                    <li>
                        <Link to='/profile/kyuhyeon'>Kwak Kyuhyeon의 프로필</Link>
                    </li>
                    <li>
                        <Link to='/profile/velopert'>Velopert의 프로필</Link>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path={['/about', '/info']} component={About} />
                    <Route exact path='/profile/:username' component={Profile} />
                    <Route exact path='/history' component={History} />
                    <Route render={({ location }) => (
                        <div>
                            <h2>이 페이지는 존재하지 않습니다.</h2>
                            <p>{location.pathname}</p>
                        </div>
                    )} />
                </Switch>
            </>
        )
    }
}

export default App;
