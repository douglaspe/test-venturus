import React from 'react';
import { Route } from 'react-router-dom';
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HeaderBreadcrumbs extends React.Component {

  render() {
  return (

      <Route
      exact={true}
      children={({ match }) => (

          (match ? <div>
            <Breadcrumbs
              separator={<FontAwesomeIcon icon="chevron-right" />}
              finalItem={'b'}
              finalProps={{
                  style: {color: 'red'}
              }}
            />
            <BreadcrumbsItem to='/' ><FontAwesomeIcon icon="home" /></BreadcrumbsItem>
            <BreadcrumbsItem to='/users' >Users</BreadcrumbsItem>
            <BreadcrumbsItem to='/users/new'>Registration</BreadcrumbsItem>
            </div> : "")

      )}
    />


  );
}
  }

export default HeaderBreadcrumbs;
