import React, { Component } from 'react';
import '../CSS/MainMenu.css'


class MainMenu extends Component {

  encryptBegin = (e) => {
    e.preventDefault();
    console.log("The button click worked");
    this.props.isClicked(true);
  }


  handleExit = (e) => {
    e.preventDefault();
    console.log("exit selected");

    const target = document.querySelector('.App');

    target.innerHTML = " ";

    const goodbyeMessage = document.createElement('h1');
    goodbyeMessage.textContent = "Thanks for encrypting, see you next time you want to be secure!";

    target.appendChild(goodbyeMessage);

    const refreshButton = document.createElement('button');

    refreshButton.textContent = "Didn't mean to exit? Start Over";
    refreshButton.setAttribute('href',"#");
    refreshButton.setAttribute('id',"refresh-btn");
    refreshButton.setAttribute('onClick',"window.location.reload()");

    target.appendChild(refreshButton);


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
      <button onClick={this.handleExit}>
        Exit
      </button>
    </div>
    );
  }
}

export default MainMenu;
