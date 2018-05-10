import React, { Component } from 'react';
import '../CSS/EncryptionString.css'

//Return to parent: Original String and Encrypted String
class EncryptionString extends Component {

  encryptString = (e) => {
    e.preventDefault();
    console.log("Encrypting String!");

    //Collect String Value
    const originalString = document.querySelector('#input-string').value;
    console.log("Original String is ",originalString);

    //Encrypt
    switch(this.props.choice){
      case 'A' :
      console.log("Encrypting string with A Method");
      break;
      case 'B' :
      console.log("Encrypting string with B Method");
      break;
      case 'C' :
      console.log("Encrypting string with C Method")
      break;
      default :
        console.log("No Encryption Selected");
    }
  }

  //Method A:  Replace the string with all 'X's.
  methodAEncrypt = () => {
    
  }

  //Method B:  Replace each char with the char one higher on the ASCII table.
  methodBEncrypt = () => {

  }

  //Method C:  Replace each char with the 3 next highest chars on the ASCII table.
  methodCEncrypt = () => {

  }

  render() {
    return (
    <div className="encryption-string-container">
      <h1>This is the EncryptionString Component</h1>
      <h2>selection choice        <span>{this.props.choice}</span>
      </h2>

      <form>
        <label htmlFor="input-string">String To Encrypt:</label>
        <input
          id="input-string"
          type="text"/>
        <button id="btn-encrypt"
          onClick={this.encryptString}>Encrypt!</button>
      </form>
    </div>
    );
  }
}

export default EncryptionString;
