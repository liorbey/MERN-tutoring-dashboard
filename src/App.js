import React, {useState,useCallback, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import "./sass/_base.scss";
import TopNav from './shared/navigation/TopNav';
import SideBar from './shared/navigation/SideBar';
import Auth from './pages/Auth';
import {AuthContext} from './shared/context/Auth-Context';
import {useAuth} from './hooks/auth-hook';
import Loading from './shared/UI/Loading';
//import Stats from './pages/Stats';
//import Students from './pages/Students';
//import AddStudent from './pages/AddStudent';
const Stats = React.lazy(()=> import('./pages/Stats'));
const Students = React.lazy(()=> import('./pages/Students'));
const AddStudent = React.lazy(()=> import('./pages/AddStudent'));



function App() {
  
  const { token, login, logout, userId } = useAuth();

  let routes;

  if (token) {
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
    <AuthContext.Provider
    value={{
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout
    }}
  >
    <Router>
      <div className="container">
        <TopNav/>
          <div className="content">
            <SideBar/>
            <Suspense fallback={<div><Loading asOverlay/></div>}>
            {routes}
            </Suspense>
          </div>
      </div>
      </Router>
  </AuthContext.Provider>

  );
}

export default App;
