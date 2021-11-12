import DrawRect from "./DrawRect";

const Detect = async (net, webcamRef, canvasRef) => {
  // Check data is available
  if (
    typeof webcamRef.current !== "undefined" &&
    webcamRef.current !== null &&
    webcamRef.current.video.readyState === 4
  ) {
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    // Set canvas height and width
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    // 4. TODO - Make Detections
    const obj = await net.detect(video); // detecting objects
    console.log(obj);

    // Draw mesh
    const ctx = canvasRef.current.getContext("2d");

    // 5. TODO - Update drawing utility
    DrawRect(obj, ctx);
  }
};

export default Detect;
