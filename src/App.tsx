import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Containers/Landing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing></Landing>
        </Route>
      </Switch>
    </Router>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
