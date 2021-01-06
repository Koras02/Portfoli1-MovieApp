import React from 'react';
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movies from './pages/Movies';
import InfoSection from './compnents/InfoSection/index';
import Sign from './pages/sign/Sign';
import Imgs from './pages/Imgs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Movies" component={Movies} />
        <Route path="/InfoSection" component={InfoSection} />
        <Route path="/Sign" component={Sign} />
        <Route path="/img" component={Imgs} />
      </Switch>
    </Router>
  );
}

export default App;
