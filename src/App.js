import React, { Component } from 'react';
import EncryptOptions from './Components/EncryptOptions'
import EncryptionString from './Components/EncryptionString'
import ShowResults from './Components/ShowResults'
import MainMenu from './Components/MainMenu'

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
    this.setState({mainMenu:false});
    this.setState({showResult: false});
    this.setState({encryptionOptionShow: true});
    this.setState({encryptOptions:bool})
  }

  //This will handle the selection made from EncryptOptions Component
  selectionMade = (selection) => {
    console.log("Selection Made Function and selection is " , selection);
    this.setState({encryptionOptionShow: false});
    this.setState({selectionChoice:selection});
    this.setState({inputAreaShow:true});
  }

  setOriginalString = (string) => {
    console.log("inside setOriginalString function and string is ",string);
    this.setState({orgString:string});
  }

  setEncryptedString = (string) => {
    console.log("inside setEncryptedString function and string is ",string);
    this.setState({inputAreaShow:false});
    this.setState({encryptedstr:string});
    this.setState({mainMenu:true});
    this.setState({showResult: true});

  }

  render() {
    return (
      <div className="App">
        <h1>Hello This is Jonathan's App</h1>
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
        ) : ' '
        }
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

          {(this.state.encryptedstr && this.state.showResult)?(
            <ShowResults
              original={this.state.orgString}
              encrypted={this.state.encryptedstr}
            />
          ):' '}

      </div>
    );
  }
}

export default App;
