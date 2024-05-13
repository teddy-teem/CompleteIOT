import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";

export default function RecordCommand(props) {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText
  } = useSpeechToText({
    continuous: false,
    useLegacyResults: false
  });
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (results.length > 0) {
      console.log(">>>>", results.length);
      console.log(">>>>", results[results.length - 1].transcript);

      if (
        results[results.length - 1].transcript.toLocaleLowerCase() ===
        "turn off"
      ) {
        props.setVoiceCommand("OFF");
      } else if (
        results[results.length - 1].transcript.toLocaleLowerCase() === "turn on"
      ) {
        props.setVoiceCommand("ON");
      } else {
        setErrorMessage("Unknown command");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    }
  }, [results]);
  if (error)
    return (
      <p style={{ color: "red" }}>
        Web Speech API is not available in this browser 🤷‍, You may update your
        browser
      </p>
    );
  return (
    <div className="voice">
      <h1 style={{ color: "white" }}>Recording: {isRecording.toString()}</h1>
      <Button
        variant="outlined"
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </Button>
      <ul
        style={{
          height: "150px",
          width: "150px",
          overflowY: "scroll"
        }}
      >
        {results.map(result => (
          <div>
            <li key={result.timestamp}>{result.transcript}</li>
          </div>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
      {errorMessage.length > 0 && (
        <div style={{ color: "red" }}>{errorMessage}</div>
      )}
    </div>
  );
}
