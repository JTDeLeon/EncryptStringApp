import React, { Component } from 'react';
import EncryptOptions from './Components/EncryptOptions'
import MainMenu from './Components/MainMenu'

class App extends Component {

  state = {
    mainMenu: true,
    encryptOptions: false
  }

  //Function to handle the state change when the onClick is made
  openEncryption = (bool) => {
    console.log("Open Encryption Function");
    console.log("Bool is ",bool);
    this.setState({encryptOptions:bool})
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
        {/* Build the options and set display none */}
        {(this.state.encryptOptions === true) ? (
          <EncryptOptions />
        ) : ' '
        }

      </div>
    );
  }
}

export default App;
