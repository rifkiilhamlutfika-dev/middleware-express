const express = require("express");
const morgan = require("morgan");
const port = 8080 || 3000;

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("middleware 1");
  next();
  console.log("setlah next");
});

app.use((req, res, next) => {
  console.log("middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`This API Running in http://localhost:${port}`);
});
