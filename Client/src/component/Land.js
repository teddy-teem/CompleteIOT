import React from "react";
export default function Land({ data }) {
  return (
    <div
      className="land-container"
      style={{
        backgroundColor: data.water_need ? "yellow" : "#add8e6",
        color: "green",
        fontWeight: "bolder",
        padding: "10px"
      }}
    >
      <p align="center">Data: {data.water_need}</p>
      <p>
        &emsp;\ &emsp; | &emsp;\ &emsp;|&emsp; |&emsp; /&emsp; \&emsp; \&emsp;
        |&emsp;{" "}
      </p>
      <p>
        &emsp;\ &emsp; | &emsp;\ &emsp;|&emsp; |&emsp; /&emsp; \&emsp; \&emsp;
        |&emsp;{" "}
      </p>
      <p>
        &emsp;\ &emsp; | &emsp;\ &emsp;|&emsp; |&emsp; /&emsp; \&emsp; \&emsp;
        |&emsp;{" "}
      </p>
      <p>
        &emsp;\ &emsp; | &emsp;\ &emsp;|&emsp; |&emsp; /&emsp; \&emsp; \&emsp;
        |&emsp;{" "}
      </p>
      <p>
        &emsp;\ &emsp; | &emsp;\ &emsp;|&emsp; |&emsp; /&emsp; \&emsp; \&emsp;
        |&emsp;{" "}
      </p>
    </div>
  );
}
