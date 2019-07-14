import React from 'react';
import './backButton.scss';

export const BackButton = ({ className, onClick }) => {
  return (
    <div className={'backButton__container ' + className} onClick={onClick ? onClick : () => {}}>
      <div className="backButton__arrow" />
    </div>
  );
};
