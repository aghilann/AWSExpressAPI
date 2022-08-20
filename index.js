const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const { client } = require('./config.js');

app.use(bodyParser.json());
app.use(cors());

app.get('/', async (req, res) => {
  try {
    const data = await client.query('SELECT * FROM users');
    res.send(JSON.stringify(data.rows));
  } catch (err) {
    console.log(err);
    res.send('Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
