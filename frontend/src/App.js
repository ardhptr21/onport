import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./routes";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          {routes.map((route, index) => (
            <Route path={route.path} exact={route.exact} key={index}>
              {route.useNavbar && <Navbar />}
              <route.component />
            </Route>
          ))}
        </Switch>
      </main>
    </Router>
  );
}
export default App;
