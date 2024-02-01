const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const listRoute = require("./routes/listRoute");
require("dotenv").config();

app.use([cors(), express.json(), express.urlencoded({ extended: true })]);

app.get("/", (req, res) => {
  res.json("hello");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoute);

app.listen(process.env.PORT, () => {
  console.log("Good to go");
});
