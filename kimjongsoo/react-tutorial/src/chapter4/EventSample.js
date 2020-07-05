import React, { Component } from "react";

class EventSample extends Component {
  state = {
    message: "",
    username: "",
  };

  handleChange(e) {
    console.log(this);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick = (e) => {
    console.log(this);
    alert(`${this.state.username} : ${this.state.message}`);
    this.setState({ message: "" });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="input name"
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="text"
          name="message"
          value={this.state.message}
          placeholder="input Me"
          //   onChange={(e) => {
          //     console.log(e.target.value);
          //     this.setState({ message: e.target.value });
          //   }}
          onChange={this.handleChange.bind(this)}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>clear</button>
      </div>
    );
  }
}

export default EventSample;
