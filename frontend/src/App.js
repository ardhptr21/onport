import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";

function App() {
  return (
    <Router>
      <main>
        <Navbar />
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
