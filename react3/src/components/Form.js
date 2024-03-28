import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "react",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicSelect = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    console.log(
      `${this.state.username} says ${this.state.comments} about ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    // Destructuring state in render
    const { username, comments, topic } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <h3>
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              //   value={this.state.username}
              value={username}
              onChange={this.handleUsernameChange}
            />
          </h3>
          <h3>
            <label htmlFor="comments">Comments: </label>
            <textarea
              type="text"
              //   value={this.state.comments}
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </h3>
          <h3>
            <label htmlFor="topic">Topic: </label>
            <select
              // value={this.state.topic}
              value={topic}
              onChange={this.handleTopicSelect}
            >
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </h3>
          <h3>
            <button type="submit">Submit</button>
          </h3>
        </form>
      </>
    );
  }
}

export default Form;
