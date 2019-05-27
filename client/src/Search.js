import React, { Component } from "react";
import "./App.css";
import Author from "./Author.js";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      input: null
    };

    this.handleInput = this.handleInput.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  handleInput(event) {
    this.setState({ input: event.target.value });
  }

  updateTitle(event) {
    this.setState({ title: this.state.input });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.updateTitle(e)}>
          <label>
            Title:
            <input type="text" name="title" onChange={this.handleInput} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {(this.state.title !== null) ? <Author data={this.state} /> : null}
      </div>
    );
  }
}

export default Search;
