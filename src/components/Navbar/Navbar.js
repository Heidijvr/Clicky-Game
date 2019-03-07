//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-nav fixed-top navbar navbar-expand-lg nav-height nav-shadow p-0 tp-text">
        <span className="navbar-brand ml-3 h1">Test your Memory</span>       
        <span className="navbar-nav mr-auto btn btn-info"> SCORE: {this.props.score}</span>    
      </nav>
      );
    }
  }

export default Navbar;


//     