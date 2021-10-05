import * as React from "react";
import { useEffect, useState } from "react";
import Info from "../components/info.jsx";
import cities from "../data/cities.json";
import SetBackground from "../helperFunctions/setBackground.jsx";

export default function Home() {
  const title = "Is It Raining Today In ...";

  const [inputCity, setInputCity] = useState("");

  const [temp, setTemp] = useState(0);
  const [kalvinTemp, setKalvinTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [icon, setIcon] = useState("");

  const [celsius, setCelsius] = useState(true);

  const [colorBg, setColorBg] = useState("#e88848");

  const checkout =
    typeof window !== "undefined" ? localStorage.getItem("weatherCity") : "";
  const [city, setCity] = useState(checkout);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cdc8b77fb3c940808f4889fae073b84f`
        )
          .then(res => res.json())
          .then(result => {
            setIcon(result.weather[0].icon);
            setCondition(result.weather[0].description);
            setKalvinTemp(result.main.temp);
            setColorBg(SetBackground(result.weather[0].main));
            window.localStorage.setItem("weatherCity", city);
          });
      };
      fetchData();
    }
  }, [city]);

  useEffect(() => {
    setTemp(() =>
      celsius
        ? parseInt(kalvinTemp - 273.15)
        : parseInt((kalvinTemp - 273.15) * 1.8) + 32
    );
  }, [celsius, kalvinTemp]);

  return (
    <div className="main" style={{ backgroundColor: `${colorBg}` }}>
      <h1 className="title">{title}</h1>
      <div>
        {cities.cities.map(value => (
          <button
            className="cityBtn"
            style={{ color: `${colorBg}` }}
            onClick={() => {
              setCity(value);
            }}
          >
            {value}?
          </button>
        ))}
      </div>
      <h2 style={{ color: "white" }}>OR</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          className="cityInput"
          type="text"
          value={inputCity}
          placeholder="Search City"
          onChange={e => setInputCity(e.target.value)}
          onKeyPress={e => (e.key === "Enter" ? setCity(inputCity) : null)}
        />
        <div className="submitBtn" onClick={() => setCity(inputCity)}>
          →
        </div>
      </div>
      {city && checkout ? (
        <Info
          city={city}
          condition={condition}
          icon={icon}
          temp={temp}
          setCelsius={setCelsius}
          celsius={celsius}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
