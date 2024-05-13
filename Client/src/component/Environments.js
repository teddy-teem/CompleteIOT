import React from "react";

export default function Environments({ data }) {
  return (
    <div className={"environments"}>
      <div className="tempEnv">
        <div
          className="thermo"
          style={{
            border: "1px solid white",
            height: "200px"
          }}
        >
          <div
            className="thermo"
            style={{
              border: "1px solid wheat",
              backgroundImage:
                data.hum > 0 ? "linear-gradient(red 20%, yellow 80%)" : "",
              height: data.temp > 0 ? `${(data.temp / 100) * 200}px` : "200px",
              transition: 'all 1s'
            }}
          ></div>
        </div>
        <div className="text">Temp</div>
        <div className="text temp">{data.temp} °C</div>
      </div>
      <div className="tempEnv">
        <div
          className="thermo"
          style={{
            border: "1px solid white",
            height: "200px"
          }}
        >
          <div
            className="thermo"
            style={{
              border: "1px solid wheat",
              backgroundImage:
                data.hum > 0 ? "linear-gradient(blue 10%, white)" : "",
              height: data.hum > 0 ? (data.hum / 100) * 200 + "px" : "200px",
              transition: 'all 1s'
            }}
          ></div>
        </div>
        <div className="text">Humidity</div>
        <div className="text hum">{data.hum} %</div>
      </div>
    </div>
  );
}
