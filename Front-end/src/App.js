import React, { Component } from "react";
import { Route, Switch } from "react-router";

import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";
import Statistiques from "./components/Statistiques";
import Login from './components/Login';
import Transaction from './components/Transaction';
import Charge from './components/Charge';
import Clients from './components/Clients';
import Dettes from './components/Dettes';
import Profile from './components/Profile';



class App extends Component {
  render() {
    return (

      <div className="App">


        <Switch>
          <Route exact path="/" component={Login} />

          <div>
            <RightSideBar />
            <LeftSideBar />
            <Route path="/Statistiques" component={Statistiques} />
            <Route path="/Transaction" component={Transaction} />
            <Route path="/Charge" component={Charge} />
            <Route path="/Clients" component={Clients} />
            <Route path="/Dettes" component={Dettes} />
            <Route path="/Profile" component={Profile} />



          </div>

        </Switch>

      </div>





    );
  }
}

export default App;
