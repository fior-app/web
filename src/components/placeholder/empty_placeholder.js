import React from 'react';
import { Icon } from 'semantic-ui-react';

const EmptyPlaceholder = ({ icon, text }) => (
  <div style={{ marginTop: '4rem' }}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Icon name={icon || 'warning circle'} size="huge" color="grey" />
    </div>
    <div style={{ height: '2rem' }} />
    <div style={{
      display: 'flex', justifyContent: 'center', fontSize: '18px', color: 'grey',
    }}
    >
      {text}
    </div>
  </div>
);

export default EmptyPlaceholder;
