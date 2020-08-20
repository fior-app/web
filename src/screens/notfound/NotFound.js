import React from 'react';
import { Image } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
  const handleBackClick = () => <Redirect to="/" />;

  return (
    <div className="not-found-logo">
      <Image src="assets/img/404.jpg" size="large" />
      <div className="row center">
        <div>Page not found</div>
      </div>
      <div className="v-spacer-6" />
      <div className="row center">
        <button type="button" className="btn-primary" onClick={handleBackClick}>
          Back to home page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
