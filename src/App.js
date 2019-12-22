import React, {useState,useCallback} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import "./sass/_base.scss";
import TopNav from './shared/navigation/TopNav';
import SideBar from './shared/navigation/SideBar';
import Stats from './pages/Stats';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import Auth from './pages/Auth';
import {AuthContext} from './shared/context/Auth-Context';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/stats" exact>
          <Stats />
        </Route>
        <Route path="/students" >
          <Students />
        </Route>
        <Route path="/add/student" exact>
          <AddStudent />
        </Route>
        <Redirect to="/stats"/>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
  <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
    <Router>
      <div className="container">
        <TopNav/>
          <div className="content">
            <SideBar/>
            {routes}
          </div>
      </div>
      </Router>
  </AuthContext.Provider>

  );
}

export default App;
