import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";

import Search from "./pages/Search";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
          <Container>
            <Route exact path="/search" component={Search} />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
