import React from 'react';
import './footer.scss';

import { Image } from '../common/image/image';
import { constants } from '../../constants';

export const Footer = () => {
  return (
    <footer className="footer__container">
      <a href={constants.URL.REPOSITORY}>
        <Image src={constants.RESOURCES.REPOSITORY_IMAGE_URL} className="footer__repositoryImage" />
      </a>
    </footer>
  );
};
