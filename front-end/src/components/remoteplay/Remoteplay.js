import React, { useState, useEffect, useRef } from "react";

function App() {
  const imgRef = useRef(null);
  const wsRef = useRef(null);
  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    wsRef.current = new WebSocket("wss://i9c106.p.ssafy.io/websocket/");

    wsRef.current.onmessage = (event) => {
      const imageBuffer = event.data;
      const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
      const imageURL = URL.createObjectURL(imageBlob);
      imgRef.current.src = imageURL;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

<<<<<<< HEAD
  handleChangeFullscreen(fullscreen) {
    this.setState({ fullscreen });
  }

  handleChangeResolution(e) {
    this.props.options.resolution = e.target.value;
    this.props.onOptionsChange(this.props.options);
  }

  async onStream(stream) {
    this.videoRef.current.srcObject = stream;
    await this.videoRef.current.play();
  }

  render() {
    return (
      <div>
        <div>
          <video ref={this.videoRef} style={{ width: '600px', height: '300px' }} id="videoElement" autoPlay="" controls>
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <Options
            options={this.state.options}
            onOptionsChange={this.handleOptionsChange}
            keyCapture={this.state.keyCapture}
            onKeyCaptureChange={this.handleChangeKeyCapture}
            fullscreen={this.state.fullscreen}
            onFullscreenChange={this.handleChangeFullscreen}
          />
        </div>
        <SessionManager
          ref={this.sessionRef}
          url={this.state.url}
          keyCapture={this.state.keyCapture}
          options={this.state.options}
          onStream={this.onStream}
          videoRef={this.videoRef}
          fullscreen={this.state.fullscreen}
        />
      </div>
=======
    return () => {
      wsRef.current.close();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  const handleKeyDown = (event) => {
    const key = event.key;
    const data = JSON.stringify({ type: "keydown", keys: key });
    console.log(data);
    setPressedKey(data);
    wsRef.current.send(
      JSON.stringify({
        event: "command",
        data: data,
      })
>>>>>>> feature/Play/BE
    );
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    const data = JSON.stringify({ type: "keyup", keys: key });
    console.log(data);
    setPressedKey(data);
    wsRef.current.send(
      JSON.stringify({
        event: "command",
        data: data,
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <img ref={imgRef} alt="Received Image" />
      {/* <p>{pressedKey}</p> */}
    </div>
  );
}

export default App;
