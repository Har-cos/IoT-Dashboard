const express = require("express");

const app = express();
app.use(express.json());

let state = {
  led: false,
  temperature: null,
  humidity: null
};
app.get("/state", (req, res) => {
  res.json(state);
});

app.post("/sensor", (req, res) => {
  const { temperature, humidity } = req.body;

  if (temperature !== undefined) state.temperature = temperature;
  if (humidity !== undefined) state.humidity = humidity;

  res.json({ ok: true, state });
});

app.post("/toggle-led", (req, res) => {
  state.led = !state.led;
  res.json({ led: state.led });
});

app.listen(8080, () => {
  console.log("A szerver fut: http://localhost:8080");
});