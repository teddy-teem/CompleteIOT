import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ColorSwitches from "./ColorSwitches";

export default function Heading({ data, socket, voiceCommand }) {
  const [currentTime] = useState(new Date());
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (socket) {
      if (data.dark) {
        setChecked(true);
        socket.emit("LEDControlSendToIOT", "ON", function (response) {
          if (response.toUpperCase() === "FAIL") {
            setChecked(false);
          } else {
            setChecked(true);
          }
          console.log("=========emit response", response.toUpperCase());
        });
      } else {
        setChecked(false);
        socket.emit("LEDControlSendToIOT", "OFF", function (response) {
          if (response.toUpperCase() === "FAIL") {
            setChecked(false);
          } else {
            setChecked(!checked);
          }
          console.log("=========emit response", response.toUpperCase());
        });
      }
    }
  }, [data.dark, socket]);

  useEffect(() => {
    if (socket) {
      if (voiceCommand && voiceCommand === "ON") {
        setChecked(true);
        socket.emit("LEDControlSendToIOT", "ON", function (response) {
          if (response.toUpperCase() === "FAIL") {
            setChecked(false);
          } else {
            setChecked(true);
          }
          console.log("=========emit response", response.toUpperCase());
        });
      } else {
        setChecked(false);
        socket.emit("LEDControlSendToIOT", "OFF", function (response) {
          if (response.toUpperCase() === "FAIL") {
            setChecked(false);
          } else {
            setChecked(!checked);
          }
          console.log("=========emit response", response.toUpperCase());
        });
      }
    }
  }, [voiceCommand, socket]);
  return (
    <div className="time">
      {console.log("========Voice command: ", voiceCommand)}
      <p> Date:&emsp;{currentTime.toLocaleDateString()}</p>
      <p>
        Time:&emsp;{currentTime.getHours()}:{currentTime.getMinutes()}:
        {currentTime.getSeconds()}
      </p>
      <p>
        Status:&emsp;
        {data.temp === 0 ? (
          <b style={{ letterSpacing: "3px", color: "red" }}>Disconnected</b>
        ) : (
          <b>Connected</b>
        )}
      </p>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "10px",
          width: "50%",
          borderRadius: "5px"
        }}
      >
        <ColorSwitches
          onChange={() => {
            // data.dark ? setChecked(true) : setChecked(!checked);
            socket.emit(
              "LEDControlSendToIOT",
              checked ? "OFF" : "ON",
              function (response) {
                if (response.toUpperCase() === "FAIL") {
                  setChecked(false);
                } else {
                  setChecked(!checked);
                }
                console.log("=========emit response", response.toUpperCase());
              }
            );
          }}
          checked={checked}
          label=" LED "
        />
      </Box>
    </div>
  );
}
