import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Index extends Component {
  render() {
    return (
      <div className="container">
        <h1>Você pode logar</h1>
      </div>
    );
  }
}

export default withRouter(Index);