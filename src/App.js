import React, { Component } from 'react';
import style from './style.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Video from './components/CorpoVideo';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header />
        <Banner />
        <Video />
      </div>
    );
  }
}


export default App;
