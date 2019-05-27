import React, { Component } from "react";
import axios from "axios";
import { InputGroup, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
      this.passSearch();
    });
  }
  //book?title=
  passSearch() {
    if (this.state.title !== null) {
      axios.get("/book.v2/" + this.state.title).then(res => {
        console.log(res);
        this.setState({ author: res.data.author });
      });
    }
  }

  render() {
    return (
      <Container>
        <h1>Book Search</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Book Title"
            aria-label="Book title"
            aria-describedby="basic-addon2"
            onChange={e => this.handleInput(e)}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              onClick={e => this.updateTitle(e)}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <p>
          Input : {this.state.title} Result: {this.state.author}
        </p>
      </Container>
    );
  }
}

export default Search;
