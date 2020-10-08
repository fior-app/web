import React from 'react';
import { Image } from 'semantic-ui-react';

const BaseLoading = () => (
  <>
    <div style={{ marginTop: '26rem' }}>
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center',
      }}
      >
        <Image src="assets/svg/loading.svg" size="tiny" />
      </div>
    </div>
  </>
);

export default BaseLoading;
