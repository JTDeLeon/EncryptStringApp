import React, { Component } from 'react';
import '../CSS/MainMenu.css'


class MainMenu extends Component {

  //Begins the encryption sequence
  encryptBegin = (e) => {
    e.preventDefault();
    this.props.isClicked(true);
  }

  //Handles when a user selects exit from main menu
  handleExit = (e) => {
    e.preventDefault();

    const target = document.querySelector('.App');

    //Clears html from App
    target.innerHTML = " ";

    //Creates a goodbye message
    const goodbyeMessage = document.createElement('h1');
    goodbyeMessage.textContent = "Thanks for encrypting, see you next time you want to be secure!";

    //Writes message to DOM
    target.appendChild(goodbyeMessage);

    //Incase the user made a mistake, or wants to keep encrypting this is the fallback
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
      <h2 id="main-menu-title">Main Menu</h2>
      <p>Press 'Select String Encryption Method' to begin!</p>

      {/*Begins the encryption sequence */}
      <button
        className="mm-btn"
        onClick={this.encryptBegin}>
        Select String Encryption Method
      </button>

      {/*Exits the user from program with a nice message */}
      <button
        className="mm-btn"
        onClick={this.handleExit}>
        Exit
      </button>
    </div>
    );
  }
}

export default MainMenu;
