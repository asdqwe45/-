import React, { useState, useEffect, useRef } from "react";

function App() {
  const imgRef = useRef(null);
  const wsRef = useRef(null);
  const wsRef2 = useRef(null);

  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    wsRef.current = new WebSocket("ws://localhost:6001");
    wsRef2.current = new WebSocket("ws://localhost:6002");

    wsRef.current.onmessage = (event) => {
      const imageBuffer = event.data;
      const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
      const imageURL = URL.createObjectURL(imageBlob);
      imgRef.current.src = imageURL;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      wsRef2.current.close();
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  const handleKeyDown = (event) => {
    const key = event.key;
    const data = JSON.stringify({ type: "keydown", keys: key });
    console.log(data);
    setPressedKey(data);
    wsRef2.current.send(
      JSON.stringify({
        event: "command",
        data: data,
      })
    );
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    const data = JSON.stringify({ type: "keyup", keys: key });
    console.log(data);
    setPressedKey(data);
    wsRef2.current.send(
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
