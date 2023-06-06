// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BodyForm from './components/BodyForm';
import Tables from './components/Tables';

import React, { useState, useEffect } from 'react';

function App() {

  return (
    <>
      {/* <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container"> <TextForm title="Enter the Text to Analyze Below. . ." /> </div> */}
      <Header/>
      <BodyForm></BodyForm>
      <Tables ></Tables>
    </>
  );
}

export default App;
