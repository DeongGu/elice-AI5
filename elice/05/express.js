const express = require("express");

// console.log(express);

const app = express();

const PORT = process.env.PORT || 3000;

// console.log(express.static);

// app.get("/", (req, res) => {
//   res.send("Hello, World");
// });

//미들웨어
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("http://localhost:3000/");
});
