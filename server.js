import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});
app.get('/about', (req, res) => {
  res.send('Hello, Im Thien');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
