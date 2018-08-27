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

/* ========== GET/READ AN ITEM BY ID ========== */
// router.get('/users/:id', bodyParser, (req, res, next) => {
//   const {id} = req.params;
//   User.findById({_id: id})
//     .then(results => {
//       res.json(results);
//     })
//     .catch(err => {
//       next(err);
//     });
// });

module.exports = router;