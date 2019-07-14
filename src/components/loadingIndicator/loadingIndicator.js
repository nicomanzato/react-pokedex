import React from 'react';
import './loadingIndicator.scss';

import ReactLoading from 'react-loading';

export const LoadingIndicator = () => {
  return (
    <div className="loadingIndicator__container">
      <ReactLoading type={'bubbles'} height={100} width={100} />
    </div>
  );
};
