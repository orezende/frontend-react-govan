import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../components/Menu';

import './styles/Index.css';
class Index extends Component {

  render() {

    return (
      <div  >
          <Menu></Menu>
      </div>
    );
  }
}

export default withRouter(Index);