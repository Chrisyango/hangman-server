'use strict';

const {app} = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const mongoose = require('mongoose');
const {TEST_DATABASE_URL} = require('../config');
const Words = require('../models/words');

describe('Words endpoints', function() {
  before(function () {
    return mongoose.connect(TEST_DATABASE_URL, {autoIndex: false}, {useNewUrlParser: true});
  });
  
  // beforeEach(function() {

  // });
  
  afterEach(function() {
    return Words.remove({});
  });
  
  after(function() {
    return mongoose.disconnect();
  });

  describe('GET /api/words', function() {
    it('should return all the words in the database', function() {
      let response;
      return chai
        .request(app)
        .get('')
        .then(_response => {
          response = _response;
          expect(response).to.have.status(200);
          expect(response.body).to.be.an(Array);
          expect(response.body.lenght).to.eql(100);
        });
    });
  });
});