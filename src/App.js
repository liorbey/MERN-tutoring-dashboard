import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import "./sass/_base.scss";
import TopNav from './navigation/TopNav';
import SideBar from './navigation/SideBar';
import Stats from './pages/Stats';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';

function App() {
  return (
        <div className="container">
          <TopNav/>
            <div className="content">
            <Router>
            <SideBar/>
              <Switch>
                <Route path="/" exact>
                  <Stats />
                </Route>
                <Route path="/students">
                  <Students />
                </Route>
                <Route path="/add/student">
                  <AddStudent />
                </Route>
                <Redirect to="/" />
              </Switch>
            </Router>
            </div>
        </div>
  );
}

export default App;
