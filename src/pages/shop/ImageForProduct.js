import { Component } from "react";

// class abych mel priklad pouziti xd
class ImageComponent extends Component {
  render() {
    if (this.props.url) {
      return (
        <img
          src={this.props.url}
          alt={this.props.label.toUpperCase() + " image"}
          title={this.props.label}
          className={"productIMG"}
          loading={"lazy"}
        />
      );
    }

    return <div className="productIMG">NO IMAGE FOUND :(</div>;
  }
}

export default ImageComponent;
