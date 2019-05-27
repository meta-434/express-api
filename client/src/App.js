import React, { Component } from "react";
import "./App.css";
import Author from './Author.js';

class App extends Component {
  state = {
    title : 'War and Peace'
  };

  render() {
    //console.log(this.state.title);
        return (
      <div>
        <Author data={this.state}/>
      </div>
    );
  }
}

export default App;
