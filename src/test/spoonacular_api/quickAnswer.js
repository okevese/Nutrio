import chai from 'chai';
import supertest from 'supertest';
const expect = chai.expect;


const api = supertest('http://localhost:3000/api/v1');

describe('GET /answer', function() {
  const answer = '/answer';

  it('should return a non empty object', function() {
    return api
      .get(answer)
      .expect(200)
      .then(response => {
        expect(response.body).to.have.property('answer');
        expect(response.body).to.have.property('image');
        expect(response.body).to.have.property('type');
      })
  });
});

