import React, { Component } from 'react';
import '../CSS/EncryptionString.css'

//Return to parent: Original String and Encrypted String
class EncryptionString extends Component {

  encryptString = (e) => {
    e.preventDefault();
    //Handles if string is empty
    if(!document.querySelector('#input-string').value){
      if(!document.querySelector('#error-message')){
        const errorMessage = "<p id='error-message' style='color:red'>Please enter a valid string and try again.</p>";
        document.querySelector('#string-form').insertAdjacentHTML('afterend',errorMessage);
      }
      return;
    }

    //Collect String Value
    const originalString = document.querySelector('#input-string').value;

    let encryptedString = '';
    //Encrypt
    switch(this.props.choice){
      case 'A' :
      encryptedString = this.methodAEncrypt(originalString);
      break;
      case 'B' :
      encryptedString = this.methodBEncrypt(originalString);
      break;
      case 'C' :
      encryptedString = this.methodCEncrypt(originalString);
      break;
      default :
        console.log("No Encryption Selected");
    }

    //Passes strings to parent
    this.props.originalStringPassed(originalString);
    this.props.encryptedStringPassed(encryptedString);
  }

  //Method A:  Replace the string with all 'X's.
  methodAEncrypt = (originalString) => {
    //Convert String To Array
    let stringArray = originalString.split("");
    //Manipulate Array
    let resultArray = stringArray.map((letter)=>{
      return 'X';
    });
    //Convert Array Back To String
    let resultString = resultArray.join('');
    return resultString;
  }

  //Method B:  Replace each char with the char one higher on the ASCII table.
  methodBEncrypt = (originalString) => {
    //Get the Ascii Codes
    let stringArray = originalString.split("");
    let asciiArray = stringArray.map((letter)=>{
      const ascii = (letter.charCodeAt(0))+1;
      return ascii;
    });
    let resultArray = asciiArray.map((asciiNum)=>{
      return String.fromCharCode(asciiNum);
    })
    let resultString = resultArray.join('');
    return resultString;
  }

  //Method C:  Replace each char with the 3 next highest chars on the ASCII table.
  methodCEncrypt = (originalString) => {
    let stringArray = originalString.split("");
    let asciiArray = stringArray.map((letter)=>{
      const ascii =[
        (letter.charCodeAt(0))+1,
        (letter.charCodeAt(0))+2,
        (letter.charCodeAt(0))+3
      ]
      return ascii;
    });
    let resultArray = asciiArray.map((arrayOfCharCodes)=>{
      return arrayOfCharCodes.map((charCode)=>{
        return String.fromCharCode(charCode);
      })
    });

    let resultString = resultArray.join('').split(',').join('');

    return resultString;
  }

  render() {
    return (
    <div className="encryption-string-container">
      <h1>What string do you want to encrypt?</h1>
      <h4>Your Encryption Method Choice is       <span>{this.props.choice}</span>
      </h4>

      <form id="string-form">
        <label htmlFor="input-string">String To Encrypt:</label>
        <input
          id="input-string"
          type="text"
          placeholder="Enter String"
        />
        <button id="btn-encrypt"
          onClick={this.encryptString}>Encrypt!</button>
      </form>
    </div>
    );
  }
}

export default EncryptionString;
