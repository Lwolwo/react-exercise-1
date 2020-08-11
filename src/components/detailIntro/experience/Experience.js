import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Experience.scss';
export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experience">
        <p className="year">{this.props.year}</p>
        <div className="describe">
          <p className="title">{this.props.title}</p>
          <p className="detail">{this.props.detail}</p>
        </div>
      </div>
    );
  }
}

Experience.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};
