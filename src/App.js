import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GetAppointment from './components/GetApointment/GetAppointment';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review';

export const UserContext = createContext();

const App = () => {
  const [loginUser, setLoginUser] = useState({
    name: "",
    email: "",
    photo: ""
  });
  return (
    <div>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/apointment">
              <GetAppointment></GetAppointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/reviews">
              <Review></Review>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
};

export default App;