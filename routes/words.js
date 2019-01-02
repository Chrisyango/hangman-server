'use strict';

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

const Words = require('../models/words');

/* ========== GET/READ ALL ITEM ========== */
router.get('/words', bodyParser, (req, res, next) => {
  Words.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;