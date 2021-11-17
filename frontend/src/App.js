import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navigations/Navbar";
import routes from "./routes";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Router>
      <main>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
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
