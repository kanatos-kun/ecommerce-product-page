const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  // res.render("index");
  // res.json({});
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//Set static folder
// app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
