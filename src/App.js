import Home from "./pages/home/home";
import Downloads from "./pages/downloads/downloads.component";

import { Switch, Route, Link } from "react-router-dom";


import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-item logo"> PPSSPP </div>
          <Link to="/">
            <div className="navbar-item active"> Home </div>
          </Link>
          <Link to="/downloads"><div className="navbar-item"> Download </div></Link>
          <div className="navbar-item"> Screens & Video </div>
          <div className="navbar-item"> Guides & Help </div>
          <div className="navbar-item"> Forums </div>
          <div className="navbar-item"> Contact </div>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/downloads" component={Downloads} />
          <Route path="/shop" component={<div>Shop</div>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
