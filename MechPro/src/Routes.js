import {
  BrowserRouter as Redirect,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./navpages/home";
import { Profile } from "./navpages/profile";
import { Login } from "./navpages/login";
import { Mech } from "./navpages/signup-mech";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/">
          <Mech />
        </Route>
      </Switch>
    </Router>
  );
};
