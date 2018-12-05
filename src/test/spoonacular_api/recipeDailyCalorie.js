import chai from 'chai';
import assertArrays from 'chai-arrays';
import supertest from 'supertest';

chai.use(assertArrays);
const expect = chai.expect;

const api = supertest('http://localhost:3000/api/v1');

// The returned object from meal_plan end point is the same as
// that from daily_calorie_recipe.
// TODO: refactor to seperate nutrients test from meals.
describe('GET /daily_calorie_recipe', function() {
  const dailyCalorie = '/daily_calorie_recipe';
  it('returns object containing meals and nutrients', function() {
    return api
      .get(dailyCalorie)
      .expect(200)
      .then(response => {
        expect(response.body).to.have.property('meals');
        expect(response.body.meals).to.be.array();
        expect(response.body.meals).to.be.ofSize(3);

        // test key property for each object of array, meals.
        let meals = response.body.meals;
        let expectMealKeys = ['id', 'title', 'readyInMinutes', 'image', 'imageUrls'];


        meals.forEach(function(meal) {
          let returnedMealKeys = Object.keys(meal);
          let keyCount = returnedMealKeys.length;
          for (let i = 0; i < keyCount; i++) {
            expect(Object.keys(meal)[i]).to.equal(expectMealKeys[i]);
          }
        });
        

        // test property nutrients and nutrients keys.
        expect(response.body).to.have.property('nutrients');

        let nutrients = response.body.nutrients;
        let expectNutrientKeys = ['calories', 'protein', 'fat', 'carbohydrates'];

        let returnedNutrientKeys = Object.keys(nutrients);
        let keyCount = returnedNutrientKeys.length;

        for (let i = 0; i < keyCount; i++) {
          expect(Object.keys(nutrients)[i]).to.equal(expectNutrientKeys[i]);
        }
      });
  });
});