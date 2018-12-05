import chai from 'chai';
import supertest from 'supertest';
const expect = chai.expect;

const api = supertest('http://localhost:3000/api/v1');

describe('GET food trivia', () => {
  const trivia = '/trivia';
  it('should return a non empty object', (done)=> {
    api
      .get(trivia)
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('text');
        expect(res.body.text).to.not.equal(null);
        done();
      });
  });
});
