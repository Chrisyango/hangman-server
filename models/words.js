'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const WordsSchema = new mongoose.Schema({
  words: {
    type: Array
  }
});

WordsSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  } 
});

WordsSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

WordsSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
};

const Words = mongoose.model('Words', WordsSchema);

module.exports = Words;