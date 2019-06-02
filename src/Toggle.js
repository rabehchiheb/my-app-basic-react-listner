import React from 'react';
import Img from './Components/Img';
import image from './card1.jpg';
import image1 from './card2.jpg';
import './App.css';


class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      isToggleOn: true,
      Img: {
        title: "title 1",
        description: "description 1",
        image: image
      }
    }
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(title, description, image) {
      this.setState(({
        img: { title: title, description: description, image: image }
      }));
    }
  
    render() {
      return (
          <div>

         
        <button  onClick={() => {
          this.handleClick(
            "bbbbbbbbbbbb",
            "bbbbbbbbbbbb",
            image1
          );
        }}>
    
        </button>
         <Img
        title={this.state.img.title}
        description={this.tate.img.description}
        image={this.state.img.image}
       />
 </div>
      );
    }
  }
 
  export default Toggle;