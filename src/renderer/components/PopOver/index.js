import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import constants from '../../../constants';

const PopOver = ({ position, height }) => {
  const popoverStyle = {
    height,
  };

  const arrowDim = height * Math.sqrt(2);
  const arrowStyle = {
    width: arrowDim,
    height: arrowDim,
    top: position === 'top' ? height - arrowDim / 2 : -arrowDim / 2,
    backgroundColor: constants.popOverOrBarColor,
  };

  return (
    <div className="popover" style={popoverStyle}>
      <div className="arrow" style={arrowStyle} />
    </div>
  );
};

PopOver.propTypes = {
  position: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

export default PopOver;
