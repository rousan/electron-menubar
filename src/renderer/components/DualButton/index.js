import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class DualButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedButton: props.leftButton,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(button) {
    this.setState({
      selectedButton: button,
    });
    this.props.onClick(button);
  }

  render() {
    return (
      <div className="dual-button">
        <div
          role="button"
          className={`button left ${this.state.selectedButton === this.props.leftButton ? 'active' : ''}`}
          onClick={this.onButtonClick.bind(undefined, this.props.leftButton)}
        >
          {this.props.leftButton}
        </div>
        <div
          role="button"
          className={`button right ${this.state.selectedButton === this.props.rightButton ? 'active' : ''}`}
          onClick={this.onButtonClick.bind(undefined, this.props.rightButton)}
        >
          {this.props.rightButton}
        </div>
      </div>
    );
  }
}

DualButton.propTypes = {
  leftButton: PropTypes.string.isRequired,
  rightButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DualButton;
