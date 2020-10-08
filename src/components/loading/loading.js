import React from 'react';
import { Image } from 'semantic-ui-react';

const BaseLoading = () => (
  <div style={{ marginTop: '24rem' }}>
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Image src="assets/svg/loading.svg" size="small" />
      <Image src="assets/logo/logo_name.png" size="small" wrapped />
    </div>
  </div>
);

export default BaseLoading;
