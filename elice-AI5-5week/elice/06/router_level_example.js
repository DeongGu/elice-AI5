// require("dotenv").config();
const express = require("express");
const app = express();
const coffeeMakerRouter = require("./routes/coffeeMakerRouter");

app.use("/api/coffeemaker", coffeeMakerRouter);

app.listen(process.env.PORT || 3000);
