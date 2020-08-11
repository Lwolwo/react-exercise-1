import React, { Component } from 'react';
import IntroHeader from './components/introHeader/introHeader';
import DetailIntro from './components/detailIntro/detailIntro';
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
