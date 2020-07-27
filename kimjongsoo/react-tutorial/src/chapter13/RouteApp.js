import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import HistorySample from './components/HistorySample';

const RouteApp = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/profiles">Profiles</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> */}
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true}></Route>
        <Route path={['/about', '/info']} component={About}></Route>
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
      {/* <Route path="/profile/:username" component={Profile}></Route> */}
      {/* <Route path="/info" component={About}></Route> */}
    </div>
  );
};

export default RouteApp;
