require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const authroute = require("./routes/auth.route");
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "POST"
  })
);

app.use("/auth", authroute);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
