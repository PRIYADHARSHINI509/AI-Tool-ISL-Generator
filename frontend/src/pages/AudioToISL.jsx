import { useState } from "react";

function AudioToISL() {
  const [result, setResult] = useState("");

  const handleAudio = () => {
    const speechText = "hello";

    const islDictionary = {
      hello: "🤟 HELLO",
      thankyou: "🙏 THANK YOU",
      welcome: "😊 WELCOME",
      yes: "👍 YES",
      no: "👎 NO",
    };

    setResult(islDictionary[speechText]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Audio to ISL</h1>

      <p>Upload or Record Audio</p>

      <button onClick={handleAudio}>
        Convert Audio
      </button>

      <br /><br />

      <h3>{result}</h3>
    </div>
  );
}

export default AudioToISL;