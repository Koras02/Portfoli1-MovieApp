import React, { useEffect, useState } from "react";
import './App.css';
// import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movies from './pages/Movies';
import InfoSection from './compnents/InfoSection/index';
import Sign from './pages/sign/Sign';
import Imgs from './pages/Imgs';
import LoadingScreen from "./pages/LoadingScreen";
 
function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
    if(0) {
      return null;
    }
  }, [loading])

  return (
    <>
    {loading === false ? (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/Movies" component={Movies} />
          <Route path="/InfoSection" component={InfoSection} />
          <Route path="/Sign" component={Sign} />
          <Route path="/img" component={Imgs} />
        </Switch>
      </Router> 
      ) : (
        <LoadingScreen />
        )}
    </>
  );
}

export default App;
