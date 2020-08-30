import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

import Search from "./pages/Search";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Wrapper>
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}

export default App;