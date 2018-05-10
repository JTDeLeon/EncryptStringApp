import React, { Component } from 'react';
import '../CSS/MainMenu.css'


class MainMenu extends Component {

  encryptBegin = (e) => {
    e.preventDefault();
    console.log("The button click worked");
    this.props.isClicked(true);
  }

  render() {
    return (
    <div className="main-menu-container">
      <h2>Main Menu</h2>
      <p>Press 'Select String Encryption Method' to begin!</p>

      {/*Begins the encryption sequence */}
      <button onClick={this.encryptBegin}>
        Select String Encryption Method
      </button>

      {/*Exits the user from program with a nice message */}
      <button>
        Exit
      </button>
    </div>
    );
  }
}

export default MainMenu;
