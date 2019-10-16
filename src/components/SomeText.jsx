import React from "react";

class SomeText extends React.Component {
  render() {
    const style = {
      font: "Arial",
      fillStyle: "black",
      fontSize: "30"
    };

    return (
      <text
        name={this.props.key + "_123"}
        x={this.props.x}
        y={-this.props.canvasHeight + this.props.y}
        style={style}
      >
        {this.props.children}
      </text>
    );
  }
}

export default SomeText;
