import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import  PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddService from './components/AddService/AddService';
import { createContext } from 'react';
import Login from './components/Login/Login';
import { useState } from 'react';
import SingleService from './components/SingleService/SingleService';
import Bookings from './components/Bookings/Bookings';
import ManageServices from './components/ManageServices/ManageServices';
import Orders from './components/Orders/Orders';
import AddAdmin from './components/AddAdmin/AddAdmin';
import Services from './components/Home/Services/Services';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
          <Route
                exact
                path="/"
                render={() => {
                    return (
                      loggedInUser.email ?
                      <Redirect to="/dashboard" /> :
                      <Redirect to="/home" /> 
                    )
                }}
              />
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
                <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path="/admin">
                <AddAdmin></AddAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
                <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/serviceBooking/:serviceId">
                <SingleService></SingleService>
            </PrivateRoute>
            <PrivateRoute path="/bookings">
                <Bookings></Bookings>
            </PrivateRoute>
            <PrivateRoute path="/orders">
                <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/services">
              <Services></Services>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
