import './App.css';
import React from 'react';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';

function App() {

  return (
    <div className='components'>
      <div><Page1></Page1></div>
      <div><Page2></Page2></div>
      <div><Page3></Page3></div>
      <div><Page4></Page4></div>
      <div><Page5></Page5></div>
      <div><Page6></Page6></div>
    </div>
  );
}

export default App;
