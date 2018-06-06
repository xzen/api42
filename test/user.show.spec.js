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
          res.should.have.status(200);
          res.text.should.be.eql('{}');

          done();
      });
  });

  it('GET /show:id should have not id in url', (done) => {
    chai.request(app)
      .get('/user/show/')
      .end((err, res) => {
          res.should.have.status(404);
          res.text.should.be.eql('{"code":404,"message":"Not Found"}');

          done();
      });
  });

  it('GET /show:id should get an user result with id 1', (done) => {
    chai.request(app)
      .get('/user/show/1')
      .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.eql('{"name":"cyril","age":30,"gender":"male"}');

          done();
      });
  });
});