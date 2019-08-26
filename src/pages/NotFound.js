import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1>Page Not Found</h1>
      </div>
    );
  }
}

export default withRouter(NotFound);