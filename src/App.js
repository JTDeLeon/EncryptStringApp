import React, { Component } from 'react';
import EncryptOptions from './Components/EncryptOptions'
import EncryptionString from './Components/EncryptionString'
import MainMenu from './Components/MainMenu'

class App extends Component {

  state = {
    mainMenu: true,
    encryptOptions: false,
    selectionChoice: ''
  }

  //Function to handle the state change when the onClick is made
  openEncryption = (bool) => {
    this.setState({encryptOptions:bool})
  }

  //This will handle the selection made from EncryptOptions Component
  selectionMade = (selection) => {
    console.log("Selection Made Function and selection is " , selection);
    this.setState({selectionChoice:selection});
  }

  render() {
    return (
      <div className="App">
        <h1>Hello This is Jonathan's App</h1>
        <MainMenu
          isClicked ={(bool) => {
            this.openEncryption(bool);
          }}
        />
        {/* Checks the state to show whether or not the EncryptOptions should display*/}
        {(this.state.encryptOptions === true) ? (
          <EncryptOptions
            selectionMade = {(selection)=>{
              this.selectionMade(selection);
            }}
          />
        ) : ' '
        }
        {/* Once a selection choice is made, this will open up the next input field section */}
        {(this.state.selectionChoice)?(
          <EncryptionString
            choice = {this.state.selectionChoice}
          />):' '}
      </div>
    );
  }
}

export default App;
