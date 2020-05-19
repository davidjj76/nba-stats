import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import { APIProvider } from './apiContext';
import Teams from './Teams';
import Players from './Players';

function App() {
  return (
    <APIProvider
      value={{
        baseUri: 'https://www.balldontlie.io/api/v1',
      }}
    >
      <div className="App">
        <Switch>
          <Route path="/teams" component={Teams}></Route>
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
    </APIProvider>
  );
}

export default App;
