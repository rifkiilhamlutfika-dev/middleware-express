const express = require("express");
const morgan = require("morgan");
const port = 8080 || 3000;

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  req.timeRequest = Date.now();
  //   console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
  console.log(req.timeRequest);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => {
  console.log(`This API Running in http://localhost:${port}`);
});
