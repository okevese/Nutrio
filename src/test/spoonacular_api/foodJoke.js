
import supertest from 'supertest';
import chai from 'chai';
const expect = chai.expect;

const api = supertest('http://localhost:3000/api/v1');


describe('GET food joke', ()=> {
  const joke = '/joke';
  it('should return a non empty object', (done) => {
    api
      .get(joke)
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('text');
        expect(res.body.text).to.not.equal(null);
        done();
      });
  });
});

