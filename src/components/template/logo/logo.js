import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <Link to="/">
              <h2><FontAwesomeIcon icon="question" /> Venturus Sports</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo;
