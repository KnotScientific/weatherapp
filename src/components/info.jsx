import * as React from "react";

export default function Info(props) {
  const title = "Is It Raining Today In ...";

  return (
    <div className="infoContainer">
      <div className="weatherContainer">
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`}
        ></img>
        <div className="weatherText">
          IT IS
          <br />
          <span
            style={{ color: "yellow", fontSize: "80px", lineHeight: "0.9" }}
          >
            {props.temp} DEG{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => props.setCelsius(prev => !prev)}
            >
              {props.celsius ? `CELSIUS` : `FAHRENHEIT`}
            </span>
          </span>
          <br />
          IN{" "}
          <span
            style={{ color: "#ff0000", fontSize: "80px", lineHeight: "0.9" }}
          >
            {props.city.toUpperCase()}
          </span>
          <br />
          <span style={{ lineHeight: "0.9" }}>
            WITH {props.condition.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}
