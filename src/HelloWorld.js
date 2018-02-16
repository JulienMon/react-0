import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, PromiseState } from "react-refetch";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState(previousState => ({
      counter: previousState.counter + 1
    }));
  };

  render() {
    if (this.props.postFetch.pending) {
      return <h1>chargement ...</h1>;
    } else {
      return (
        <h1 onClick={this.increment}>
          hello {this.props.nom + this.props.prenom} counter:{" "}
          {this.state.counter} times
        </h1>
      );
    }
  }
}

HelloWorld.propTypes = {
  nom: PropTypes.string.isRequired
};

//export default HelloWorld;

export default connect(({ postId }) => ({
  postFetch: "https://jsonplaceholder.typicode.com/posts/${postId}"
}))(HelloWorld);
