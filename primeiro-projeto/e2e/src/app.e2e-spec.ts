const request = require('request');
const should = require('should');

import { SimpleWiremock } from 'simple-wiremock';

describe('workspace-project App', () => {
  let simpleWiremock: SimpleWiremock;

  beforeEach(() => {
    simpleWiremock = new SimpleWiremock().start();

    simpleWiremock.get("/users", {
      status: 200,
      headers: {},
      jsonBody: {}
    });

  });

  it('should display welcome message', (done) => {
    request('http://localhost:5001/users', (err, res, body) =>{
                should.not.exist(err);
                should.exist(res);
                should(res.statusCode).be.equal(200);
                done();
            });
  });

  afterEach(async () => {
    simpleWiremock.stop();
  });
});
