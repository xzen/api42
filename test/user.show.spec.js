// Dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const Server = require('../app/server.js');

// Data
const userMock = require('../app/models/get-user.js');

// Core
const server = new Server();
const app = server.app;
const should = chai.should();

chai.use(chaiHttp);

/**
 * GET /user
 */
describe('GET /user', () => {
  it('GET /show:id should not get an user by false id', (done) => {
    chai.request(app)
      .get('/user/show/12')
      .end((err, res) => {
          res.should.have.status(404);
          res.text.should.be.eql(`{"code":404,"message":"Not Found"}`);

          done();
      });
  });
});