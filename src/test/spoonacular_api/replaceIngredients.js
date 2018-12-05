import chai from 'chai';
import assertArrays from 'chai-arrays';
import supertest from 'supertest';

chai.use(assertArrays);
const expect = chai.expect;


const api = supertest('http://localhost:3000/api/v1');

// TODO: Write test for failure response
describe('GET /replace_ingredient', function() {
  const replaceIngredient = '/replace_ingredient';

  it('should return the ingredient substitutes', function() {
    return api
      .get(replaceIngredient)
      .expect(200)
      .then(response => {
        expect(response.body).to.have.property('ingredient');
        expect(response.body).to.have.property('substitutes');
        expect(response.body).to.have.property('message');

        expect(response.body.substitutes).to.be.array();
      });
  });
});