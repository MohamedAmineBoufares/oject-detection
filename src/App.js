import React, { useRef, useState, useEffect } from "react";

import * as tf from "@tensorflow/tfjs";

import Webcam from "react-webcam";

import "./App.css";
import RunModel from "./utils/RunModel";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    RunModel(webcamRef, canvasRef);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">WELCOME !</h1>
        <Webcam ref={webcamRef} muted={true} className="camera camera-index8" />

        <canvas ref={canvasRef} className="camera camera-index9" />
      </header>
    </div>
  );
}

export default App;
