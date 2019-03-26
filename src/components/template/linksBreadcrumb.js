import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";

class LinkB extends Component {

  render() {

    return (
      <Route
        path={this.props.to}
        exact={this.props.activeOnlyWhenExact}
        children={({ match }) => (
          <div className={match ? "active" : ""}>
            {!match ? <NavLink exact={this.props.activeOnlyWhenExact} to={this.props.to}>{this.props.label}</NavLink> :
              this.props.label
            }
          </div>
        )}
      />
    );
  }
}

export default LinkB;
