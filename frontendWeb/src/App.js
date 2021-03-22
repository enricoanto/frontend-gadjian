import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import PersonnelList from "./pages/PersonnelList";
import PersonnelSearch from "./pages/PersonnelSearch";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store= {store}>
      <Router>
        <div id="App">
          <Navbar />
          <div className="flex-display full-screen sub-page">
            <SideBar />
            <div className="full-screen">
              <Route exact path="/" component={Home} />
              <Switch>
                <Route
                  exact
                  path="/personnels-list"
                  component={PersonnelList}
                />
                <Route
                  exact
                  path="/personnels-search"
                  component={PersonnelSearch}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
