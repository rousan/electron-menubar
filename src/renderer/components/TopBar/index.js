import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import constants from '../../../constants';
import DualButton from '../DualButton';

const TopBar = ({ onChangeTab }) => {
  const style = {
    backgroundColor: constants.popOverOrBarColor,
  };

  return (
    <div className="top-bar" style={style}>
      <DualButton leftButton="tab1" rightButton="tab2" onClick={onChangeTab} />
    </div>
  );
};

TopBar.propTypes = {
  onChangeTab: PropTypes.func.isRequired,
  // height: PropTypes.number.isRequired,
  // backgroundColor: PropTypes.string.isRequired,
};

export default TopBar;
