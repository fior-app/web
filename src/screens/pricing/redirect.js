import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const PaymentRedirect = () => {
  const { response } = useParams();

  return (
    <>
      {response === 'success' ? (
        <div style={{ marginTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Icon name="check" size="huge" color="teal" />
          </div>
          <div style={{ height: '2rem' }} />
          <div style={{
            display: 'flex', justifyContent: 'center', fontSize: '18px', color: 'grey',
          }}
          >
            Payment Success. Your account has been updated
          </div>
          <div style={{ height: '2rem' }} />
          <div style={{
            display: 'flex', justifyContent: 'center',
          }}
          >
            Go to&nbsp;
            <NavLink to="/mentorspaces">Mentorspaces page</NavLink>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Icon name="warning circle" size="huge" color="red" />
          </div>
          <div style={{ height: '2rem' }} />
          <div style={{
            display: 'flex', justifyContent: 'center', fontSize: '18px', color: 'grey',
          }}
          >
            Something wrong... Please retry the payment
          </div>
          <div style={{ height: '2rem' }} />
          <div style={{
            display: 'flex', justifyContent: 'center',
          }}
          >
            Go back to&nbsp;
            <NavLink to="/pricing">Payment page</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentRedirect;
