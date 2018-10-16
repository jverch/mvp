const { Pool } = require('pg');

// CONNECTING LOCALLY:
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'remindmeditate',
  password: 'Pass_word2%',
});

const selectAll = (callback) => {
  pool.query('SELECT * FROM meditations', (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  selectAll,
};
