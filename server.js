const express = require("express");
const path = require("path");
const app = express();
const api = require("./server/routes/api");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));

app.use("/", api);

const port = 3001;
app.listen(port, function () {
  console.log(`Server running on: http://localhost:${port} `);
});
