const express = require("express");
const morgan = require("morgan");
const port = 8080 || 3000;

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`This API Running in http://localhost:${port}`);
});
