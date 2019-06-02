import React, { Component } from "react";

class Img extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

 
  render() {
   
    return (
      <div className="img">
        <div className="img-container">
          <img className="img-src" src={this.props.image} />
        </div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Img;
