'use strict';

const mongoose = require('mongoose');

const { DATABASE_URL } = require('../config');
const Words = require('../models/words');

const seedWords = require('../db/words');

mongoose.connect(DATABASE_URL, {useNewUrlParser: true})
  .then(() => {
    return mongoose.connection.db.dropDatabase()
      .then(result => {
        console.info(`Dropped Database: ${result}`);
      });
  })
  .then(() => {
    return Words.insertMany(seedWords)
      .then(results => {
        console.info(`Inserted ${results.length} Words`);
      });
  })
  .then(() => {
    return mongoose.disconnect()
      .then(() => {
        console.info('Disconnected');
      });
  })
  .catch(err => {
    console.error(`ERROR: ${err.message}`);
    console.error(err);
  });