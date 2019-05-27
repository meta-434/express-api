import React, { Component } from "react";
import "./App.css";
import Author from "./Author.js";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      input: null,
      hasInput: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  updateTitle(event) {
    this.setState({ title: this.state.input }, () => {
      console.log(this.state.title);
      this.passSearch();
     
    });
  }

  passSearch() {
    if (this.state.title !== null) {
      axios.get("/book/" + this.state.title).then(res => {
        console.log(res);
        this.setState({ author: res.data });
      });
    }
  }

  render() {
    return (
      <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              onChange={e => this.handleInput(e)}
            />
          </label>
          <button
            type="submit"
            value="Submit"
            onClick={e => this.updateTitle(e)}
          >
            submit
          </button>
        
        <p>
          The author of {this.state.title} is {this.state.author}
        </p>
      </div>
    );
  }
}

export default Search;
