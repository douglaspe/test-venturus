import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import LinkB from './linksBreadcrumb';

class Breadcrumbs extends Component {

  render() {

    return (
      <Router>
        <LinkB activeOnlyWhenExact={true} to="/" label="Home" />
        <LinkB activeOnlyWhenExact={true} to="/users" label="users" />
        <LinkB to="/users/new" label="new" />
    </Router>
    );
  }
}

export default Breadcrumbs;
