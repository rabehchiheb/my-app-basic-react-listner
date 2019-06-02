import React, { Component } from "react";

import image1 from "./card1.jpg";
import image2 from "./card2.jpg";
import image3 from "./card3.jpg";

import Card from "./Components/Img";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      card: {
        title: "",
        description: "",
        image: ""
      }
    };
  
   this.onDropDownElementDivClick = this.onDropDownElementDivClick.bind(this);
  }
 
 onDropDownElementDivClick(title, description, image) {

    this.setState({
      isClicked: true,
      card: { title: title, description: description, image: image }
    });
  }
  
  render() {
    return (
      <React.Fragment>
        <div      >
          
          <div
           
            >
            <button
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 1",
                  "description 1",
                  image1
                );
              }}
              className="drop-down-element"
            >
              option1
            </button>
            <button className="Button"
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 2",
                  "description 2",
                  image2
                );
              }}
              className="drop-down-element"
            >
              option2
            </button>
            <button
              onClick={() => {
                this.onDropDownElementDivClick(
                  "title 3",
                  "description 3",
                  image3
                );
              }}
              className="drop-down-element"
            >
              option3
            </button>
          </div>
        </div>
      
       <div  className={this.state.isClicked == true ? "drop-down-list" : "divhidden" }  >

    
        <Card
          title={this.state.card.title}
          description={this.state.card.description}
          image={this.state.card.image}
        />
        </div>
      </React.Fragment>
      
    );

    // if (this.state.isDropped) {
    //   return <div>hello yes</div>;
    // } else {
    //   return <div>hello no</div>;
    // }
  }
}

export default Main;
