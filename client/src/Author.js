import React, { Component } from "react";
import axios from 'axios';

class Author extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title : this.props.data.title,
            author : null
        }
    };

    componentDidMount() {
        axios.get('/' + this.state.title).then(res => {
            //console.log(res);
            this.setState({author : res.data});
        })
    };

    render () {
        return (
            <div>
                <p>The author of {this.state.title} is {this.state.author}</p>
            </div>
        );
    }
}
export default Author;

