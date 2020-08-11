import React, { Component } from 'react';
import IntroHeader from './components/introHeader/IntroHeader';
import DetailIntro from './components/detailIntro/DetailIntro';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <IntroHeader />
        <DetailIntro />
      </main>
    );
  }
}

export default App;
