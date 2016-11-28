import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
const app = document.getElementById('app');

export default class App extends React.Component {
  render() {
    return (
      <div>
        This is the App Container
        {this.props.children}
      </div>
    );
  }
}

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
, app);