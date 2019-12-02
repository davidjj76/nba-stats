import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Teams from './Teams';
import Players from './Players';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          path="/teams"
          render={props => <Teams color="blue" {...props} />}
        ></Route>
        <Route path="/players" component={Players}></Route>
        <Route>
          <ul>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/players">Players</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
