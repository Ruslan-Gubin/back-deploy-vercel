import express from "express";
import { homeRouter } from "./routes/home.js";
import cors from "cors";


const app = express();
app.use(express.json())
app.use(cors());

app.get('/api/get-products', (req, res) => {
  try {
    res.status(200).json({ success: true })
  } catch (error) {
    res.status(500).json({ error })
    console.log(error)
  }
});

app.get('/about', (req, res) => res.send(`
<div>Hello World</div>
<ul>
<li>one</li>
<li>two</li>
<li>three</li>
</ul>
`));

app.use("/home", homeRouter);

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 5555;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));