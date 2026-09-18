import express from 'express';

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, web!');
});
app.get('/introduction', (req, res) => {
  res.send('Hello, Im Thien');
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
