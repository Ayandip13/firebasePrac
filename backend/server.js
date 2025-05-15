import app from './src/app.js';
import dotenv from 'dotenv';

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hey sexy");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
