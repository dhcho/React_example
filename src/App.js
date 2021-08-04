import React from 'react';
import './App.css';
import Home from './routes/Home';
import SignIn from './routes/SignIn';
import ColorThemeTutorial from './routes/ColorThemeTutorial';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signIn">
          <SignIn />
        </Route>
        <Route exact path="/colorTheme">
          <ColorThemeTutorial />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
