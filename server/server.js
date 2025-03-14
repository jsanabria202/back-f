const express = require("express");
const app = express();
const port = 4200;

app.use(express.json());

let events = [];

app.post("/api/events", (req, res) => {
  const event = req.body;
  events.push(event);
  res.status(201).send(event);
});

app.get("/api/events", (req, res) => {
  res.send(events);
});

app.put("/api/events/:id", (req, res) => {
  const id = req.params.id;
  const updatedEvent = req.body;
  events = events.map((event) => (event.id === id ? updatedEvent : event));
  res.send(updatedEvent);
});

app.delete("/api/events/:id", (req, res) => {
  const id = req.params.id;
  events = events.filter((event) => event.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
