import * as cocossd from "@tensorflow-models/coco-ssd"; // importing the pre-trained model

import Detect from "./Detect";

const RunModel = async (webcamRef, canvasRef) => {
  const net = await cocossd.load(); // loading the modal

  //  Loop and detect hands
  setInterval(() => {
    Detect(net, webcamRef, canvasRef);
  }, 10);
};

export default RunModel;
