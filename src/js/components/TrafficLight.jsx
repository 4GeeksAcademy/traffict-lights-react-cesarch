import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const colores = ["red", "yellow", "green"];
  const cambioColores = () => {
    const aleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColor(aleatorio);
  };

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center bg-black p-2 rounded-1"
        style={{ width: "10px", height: "150px" }}
      ></div>
      <div
        className="container d-flex flex-column justify-content-center align-items-center bg-black p-1 rounded-4"
        style={{ width: "100px", height: "220px" }}
      >
        <div
          className={`rounded-circle ${
            color === "red" ? "bg-danger" : "bg-secondary"
          } m-1`}
          style={{
            width: "75px",
            height: "75px",
            boxShadow: color === "red" ? "0 0 20px 5px red" : "none",
          }}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`rounded-circle ${
            color === "yellow" ? "bg-warning" : "bg-secondary"
          } m-1`}
          style={{
            width: "75px",
            height: "75px",
            boxShadow: color === "yellow" ? "0 0 20px 5px yellow" : "none",
          }}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`rounded-circle ${
            color === "green" ? "bg-success" : "bg-secondary"
          } m-1`}
          style={{
            width: "75px",
            height: "75px",
            boxShadow: color === "green" ? "0 0 20px 5px green" : "none",
          }}
          onClick={() => setColor("green")}
        ></div>
      </div>
      <div className="text-center mt-5">
        <div className="mt-4 d-flex justify-content-center gap-2">
          <button className="btn btn-dark" onClick={cambioColores}>
            Cambio Color Aleatorio
          </button>
        </div>
      </div>
    </>
  );
};

export default TrafficLight;
