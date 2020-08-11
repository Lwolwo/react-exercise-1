import React, { Component } from 'react';
import './IntroHeader.scss';

export default class IntroHeader extends Component {
  render() {
    return (
      <div className="introHeader">
        <img
          src={require('../../assets/avatar.jpg')}
          alt="profile picture"
          className="profile"
        />
        <div className="introduction">
          <h1>HELLO,</h1>
          <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        </div>
        <div className="horizontal"></div>
      </div>
    );
  }
}
