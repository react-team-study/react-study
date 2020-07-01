import React, { Component } from "react";
import PropTypes from "prop-types";

class Sample extends Component {
  static defaultProps = {
    name: "react",
  };
  static propTypes = {
    name: PropTypes.string,
    num: PropTypes.number.isRequired,
  };
  render() {
    const { name, num, children } = this.props;
    return (
      <div>
        {name}
        {num}
        {children}
      </div>
    );
  }
}

export default Sample;
