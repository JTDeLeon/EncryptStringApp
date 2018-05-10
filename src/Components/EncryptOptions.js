import React, { Component } from 'react';
import '../CSS/EncryptOptions.css'


class EncryptOptions extends Component {

  //When the user selects the button, pass selection to parent
  handleClick = (e) => {
    e.preventDefault();
    const selection = e.target.textContent;
    this.props.selectionMade(selection);
  }

  render() {
    return (
    <div className="encrypt-option-container">
      <h1>Encryption Options</h1>
      <ul id="method-descriptions">
        <li className="method-description"><span className="method-title">Method A:</span>  Replace the string with all 'X's.
        </li>
        <li className="method-description"><span className="method-title">Method B:</span>  Replace each char with the char one higher on the ASCII table.
        </li>
        <li className="method-description">
        <span className="method-title">Method C:</span>  Replace each char with the 3 next highest chars on the ASCII table.
        </li>
      </ul>

      <p id="method-direction">Please select your encryption method below!</p>

      <div className="encryption-buttons">
        <button
          onClick={this.handleClick}
          id="btn-a"
          className="selection-btn"
          >A</button>
          <button
            onClick={this.handleClick}
            id="btn-b"
            className="selection-btn"
            >B</button>
            <button
              onClick={this.handleClick}
              id="btn-c"
              className="selection-btn"
              >C</button>
      </div>
    </div>
    );
  }
}

export default EncryptOptions;
