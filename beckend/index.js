const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.use("/public", express.static(path.resolve(__dirname + "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/app", (req, res, next) => {
  res.json({
    maessage: "HELLO WORD",
  });
  next();
});
app.listen(PORT, () => {
  console.log(`server is PORT ${PORT}`);
});
