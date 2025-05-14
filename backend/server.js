const app = require("./src/app");

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hey sexy");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
