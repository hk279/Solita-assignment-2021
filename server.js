const names = require("./names.json");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.static("build"));

app.get("/api/names", (req, res) => {
    res.send(names);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
