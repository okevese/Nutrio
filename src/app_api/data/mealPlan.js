
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.meal_plan;
const secret = config.food_api_secret;

const testData = {
  diet: 'vegetarian',
  exclude: 'shellfish, olives',
  targetCalories: 2000,
  timeFrame: 'day'
};


// generate a meal plan with three meals per day.
const getMealPlan = (req, res, next) => {
  const url = host + endpoint;
  console.log(req.query);

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .query(req.query)
  .end(function (response) {
    if(response.error) {
      let err = new Error('A Server error.');

      // `error` and `code` are properties of the unirest response object
      err.status = response.code;
      console.error(response.error);
      return next(err);
    }
    console.log(response.body);
    res.locals.mealPlan = response.body;
    next();
  });
};


export default getMealPlan;