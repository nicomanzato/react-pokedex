import React from 'react';
import './backButton.scss';

export const BackButton = ({ className, onClick }) => {
  return (
    <div className={'back-button ' + className} onClick={onClick ? onClick : () => {}}>
      <div className="back-button__arrow" />
    </div>
  );
};
