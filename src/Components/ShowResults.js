import React, { Component } from 'react';
// import '../CSS/ShowResults.css'


class ShowResults extends Component {

  render() {
    return (
    <div className="show-results-container">
      <h2>Original String:</h2>
      <span>{this.props.original}</span>
      <h2>Encrypted String:</h2>
      <span>{this.props.encrypted}</span>
    </div>
    );
  }
}

export default ShowResults;
