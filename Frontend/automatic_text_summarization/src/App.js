import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/HeaderComponent/Header";
import Result from "./components/ResultComponent/ResultComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Routes>
            {/* This route is for home component 
              with exact path "/", in component props 
              we passes the imported component*/}
            <Route path="/" element={<Header />} />

            {/* This route is for result component 
              with exact path "/results", in component props 
              we passes the imported component*/}
            <Route path="/results" element={<Result />} />

            <Route path="/*" element={<Header />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
