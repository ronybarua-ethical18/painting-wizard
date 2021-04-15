import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import AddReview from './components/AddReview/AddReview';
function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
              <DashBoard></DashBoard>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
