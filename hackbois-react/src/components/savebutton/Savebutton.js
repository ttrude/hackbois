import React from 'react';
class Savebutton extends React.Component {
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      console.log("button kommt an.");
  }

    render() {
        return (
                <button onClick={this.handleClick}>Click me</button> 
        );
    }
}

export default Savebutton;
