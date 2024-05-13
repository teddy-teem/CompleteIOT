import "./App.css";
import { useEffect, useState } from "react";
import socketClient from "socket.io-client";
import Bulb from "./component/Bulb";
import Environments from "./component/Environments";
import Land from "./component/Land";
import Heading from "./component/Heading";
import RecordCommand from "./component/RecordCommand";
const SERVER = "http://192.168.1.102:8080";

function App() {
  const [data, setData] = useState({
    temp: 0,
    hum: 0,
    time: [],
    water_need: 0,
    dark: 0,
    led: false
  });
  const [voiceCommand, setVoiceCommand] = useState("");

  const [socket, setSocket] = useState(null);
  useEffect(() => {
    var io = socketClient(SERVER);
    setSocket(io);
    io.on("IOTData", data => {
      // console.log("============>Data",data);
      setData(data);
    });
    // return () => io.disconnect();
  }, [setSocket]);

  return (
    <div className="App">
      <RecordCommand
        voiceCommand={voiceCommand}
        setVoiceCommand={setVoiceCommand}
      />
      <Heading
        data={data}
        setData={setData}
        voiceCommand={voiceCommand}
        socket={socket}
        setSocket={setSocket}
      />
      <div className="components">
        <Environments data={data} />
        <Bulb data={data} />
        <Land data={data} />
      </div>
    </div>
  );
}

export default App;
