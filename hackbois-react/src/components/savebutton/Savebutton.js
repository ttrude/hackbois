import React from 'react';

var electronFs = window.require('fs');

class Savebutton extends React.Component {
  constructor(props) {
    super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      console.log("button kommt an.");
      electronFs.writeFileSync("alksdnfajagierigsoos.txt", "asdf", "utf8");
  }

    render() {
        return (
                <button onClick={this.handleClick}>Click me</button> 
        );
    }
}

export default Savebutton;
