const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const db = require('../database/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/meditations', (req, res) => {
  db.selectAll((err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}!`);
});
