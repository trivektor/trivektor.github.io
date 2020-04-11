import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}>
      <div>
        <img src="https://img.icons8.com/emoji/96/000000/construction-emoji.png" />
        {" "}
        <img src="https://img.icons8.com/color/96/000000/tow-truck.png" />
        {" "}
        <img src="https://img.icons8.com/color/96/000000/garbage-truck.png"/>
        {" "}
        <img src="https://img.icons8.com/color/96/000000/construction-trowel--v1.png"/>
      </div>
      <h1 style={{fontWeight: 500}}>
        TRIVUONG.DEV IS UNDER CONSTRUCTION
      </h1>
    </div>
  );
}

export default App;
