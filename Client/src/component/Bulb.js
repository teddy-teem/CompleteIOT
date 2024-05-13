import React from "react";

export default function Bulb({ data, socket }) {
  return (
    <div className="content">
      <div className="bulb">
        <div className={`Circle ${data.dark === 1 || data.temp === 0? "dark" : "light"}`}></div>
        <div className={`Square`}>
          <p className={`${data.dark === 1 || data.temp === 0 ? "textOff" : "textOn"}`}>
            {data.temp===0 ? "DARK": data.dark===1? "DARK": "BRIGHT"}
          </p>
        </div>
      </div>
    </div>
  );
}
