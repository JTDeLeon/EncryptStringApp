import React, { Component } from 'react';
import EncryptOptions from './Components/EncryptOptions'
import EncryptionString from './Components/EncryptionString'
import ShowResults from './Components/ShowResults'
import MainMenu from './Components/MainMenu'
import './App.css'

class App extends Component {

  state = {
    mainMenu: true,
    encryptionOptionShow: false,
    inputAreaShow: false,
    showResult: false,
    encryptOptions: false,
    selectionChoice: '',
    orgString: '',
    encryptedstr: ''
  }

  //Function to handle the state change when the onClick is made
  openEncryption = (bool) => {
    this.setState({
      mainMenu:false,
      showResult: false,
      encryptionOptionShow: true,
      encryptOptions:bool
    });
  }

  //This will handle the selection made from EncryptOptions Component
  selectionMade = (selection) => {
    this.setState({
      encryptionOptionShow: false,
      selectionChoice:selection,
      inputAreaShow:true
    });
  }

  setOriginalString = (string) => {
    this.setState({orgString:string});
  }

  setEncryptedString = (string) => {
    this.setState({
      inputAreaShow:false,
      encryptedstr:string,
      mainMenu:true,
      showResult: true
    });
  }

  render() {
    return (
      <div className="App">
        {/* Header */}
        <div className="App-header">
          <h1 className="App-title">String Encryption App</h1>
          <p className="App-intro">This app will encrypt a string passed through it.<br/><br/>Go ahead, give it a try!</p>
        </div>

        {(this.state.mainMenu)?(
          <MainMenu
            isClicked ={(bool) => {
              this.openEncryption(bool);
            }}
          />
        ): ' '}

        {/* Checks the state to show whether or not the EncryptOptions should display*/}
        {(this.state.encryptOptions === true && this.state.encryptionOptionShow) ? (
          <EncryptOptions
            selectionMade = {(selection)=>{
              this.selectionMade(selection);
            }}
          />
        ) : ' '}

        {/* Once a selection choice is made, this will open up the next input field section */}
        {(this.state.selectionChoice && this.state.inputAreaShow)?(
          <EncryptionString
            choice = {this.state.selectionChoice}
            originalStringPassed = {(string)=>{
              this.setOriginalString(string);
            }}
            encryptedStringPassed = {(string)=>{
              this.setEncryptedString(string)}}
          />):' '}

          {/* Results Component after encryption is made */}
          {(this.state.encryptedstr && this.state.showResult)?(
            <ShowResults
              original={this.state.orgString}
              encrypted={this.state.encryptedstr}
            />
          ):' '}

          {/* Footer With Credit Details */}
          <footer>
            <p>Created by <span id="credit-name">Jonathan Deleon</span></p>
          </footer>
      </div>
    );
  }
}

export default App;
