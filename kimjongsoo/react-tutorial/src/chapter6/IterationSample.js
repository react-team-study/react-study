import React, { Component } from "react";

class IterationSample extends Component {
  render() {
    const data = ["A", "B", "C", "D"];

    const dataList = data.map((item) => <li>{item}</li>);

    return <ul>{dataList}</ul>;
  }
}

export default IterationSample;
