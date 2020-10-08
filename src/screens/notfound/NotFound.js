import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { NavLink, Redirect } from 'react-router-dom';

const NotFound = () => (
  <div style={{ marginTop: '2rem' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Image src="assets/img/404.png" size="large" />
      ;
    </div>
    <div style={{ height: '4rem' }} />
    <div style={{
      display: 'flex', justifyContent: 'center', fontSize: '18px', color: 'grey',
    }}
    >
      Nothing is here :)
    </div>
    <div style={{ height: '2rem' }} />
    <div style={{
      display: 'flex', justifyContent: 'center',
    }}
    >
      Go back to&nbsp;
      <NavLink to="/">Home page</NavLink>
    </div>
  </div>
);

export default NotFound;
