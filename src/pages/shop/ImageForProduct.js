import React, { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.url}
        alt={this.props.label.toUpperCase() + " IMAGE"}
        title={this.props.label}
      />
    );
  }
}

export default ImageComponent;
