import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} exact={route.exact} component={route.component} />
          ))}
        </Switch>
      </main>
    </Router>
  );
}
export default App;
