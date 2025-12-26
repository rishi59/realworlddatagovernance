const express = require("express");
const app = express();

app.use(express.static("docs/public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Website running at http://localhost:${PORT}`);
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/docs/public/index.html");
});
