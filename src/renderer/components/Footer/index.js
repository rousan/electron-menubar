import React from 'react';
import './index.css';
import constants from '../../../constants';

const Footer = () => {
  const style = {
    backgroundColor: constants.popOverOrBarColor,
  };

  return (
    <div className="footer" style={style} />
  );
};

Footer.propTypes = {
  // position: PropTypes.string.isRequired,
  // height: PropTypes.number.isRequired,
};

export default Footer;
