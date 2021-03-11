
import './App.css';
import Body from './components/Body/Body';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/league/:leagueId">
              <LeagueDetail></LeagueDetail>
            </Route>
            <Route exact path="/">
                <Body></Body>
              </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
