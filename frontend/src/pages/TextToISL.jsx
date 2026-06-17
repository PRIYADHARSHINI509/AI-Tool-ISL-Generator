import { useState } from "react";

function TextToISL() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const generateISL = () => {
  if (!text) {
    alert("Please enter text");
    return;
  }

  const islDictionary = {
    hello: "🤟 HELLO",
    thankyou: "🙏 THANK YOU",
    welcome: "😊 WELCOME",
    yes: "👍 YES",
    no: "👎 NO",
  };

  const word = text.toLowerCase().replace(/\s/g, "");

  if (islDictionary[word]) {
    setResult(islDictionary[word]);
  } else {
    setResult("ISL Sign Not Available");
  }
};

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Text to ISL</h1>

      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={generateISL}>
        Generate ISL
      </button>

      <br /><br />

      <h3 style={{ marginTop: "20px" }}>
  {result}
</h3>
    </div>
  );
}

export default TextToISL;