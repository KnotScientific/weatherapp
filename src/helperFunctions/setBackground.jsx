export default function SetBackground(desc) {
  if (desc === "Thunderstorm") {
    return "#002244";
  } else if (desc === "Drizzle") {
    return "#6082B6";
  } else if (desc === "Rain") {
    return "#4C516D";
  } else if (desc === "Snow") {
    return "#3457D5";
  } else if (desc === "Atmosphere") {
    return "#e88848";
  } else if (desc === "Clear") {
    return "#720e9e";
  } else if (desc === "Clouds") {
    return "#00CCCC";
  } else {
    return "#e88848";
  }
}
