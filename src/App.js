import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import NotFound from './containers/notfound'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={NotFound} />
              <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
