import React from 'react';
import './logo.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Logo = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="logo">
            <h2><FontAwesomeIcon icon="igloo" /> Venturus Sports</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logo;
