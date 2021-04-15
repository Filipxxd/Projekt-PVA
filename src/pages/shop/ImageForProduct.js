import { Component } from "react";

// class abych mel priklad pouziti xd
class ImageComponent extends Component {
  render() {
    return (
      <img
        src={this.props.url ? this.props.url : "papa"}
        alt={this.props.label.toUpperCase() + " IMAGE"}
        title={this.props.label}
        className={"productIMG"}
        loading={"lazy"}
      />
    );
  }
}

export default ImageComponent;
