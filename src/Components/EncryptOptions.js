import React, { Component } from 'react';
import '../CSS/EncryptOptions.css'


class EncryptOptions extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log('selection ', e.target);
    const selection = e.target.textContent;
    console.log(selection);
    this.props.selectionMade(selection);
  }

  render() {
    return (
    <div className="encrypt-option-container">
      <h1>Encryption Options</h1>
      <p>Please select your encryption method!</p>
      <ul>
        <li>Method A:  Replace the string with all 'X's.
        </li>
        <li>Method B:  Replace each char with the char one higher on the ASCII table.
        </li>
        <li>
        Method C:  Replace each char with the 3 next highest chars on the ASCII table.
        </li>
      </ul>

      <button
        onClick={this.handleClick}
        id="btn-a"
        >A</button>
      <button
        onClick={this.handleClick}
        id="btn-b"
      >B</button>
      <button
        onClick={this.handleClick}
        id="btn-c"
      >C</button>
    </div>
    );
  }
}

export default EncryptOptions;
