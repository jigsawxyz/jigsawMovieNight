require('dotenv').config();
const monk = require('monk');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie_development';

const db = monk(url);

db.then(() => {
  console.log('Connected correctly to server');
});

module.exports = {
  db,
};
