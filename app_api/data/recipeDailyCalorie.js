import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.recipe_daily;
const secret = config.food_api_secret;

const testData = {
  targetCalories: 2000,
  timeFrame: 'day'
};


// Find multiple recipes that, when added up reach your daily caloric needs.
const getRecipeDailyCalorie = (req, res, next) => {

  const url = host + endpoint;

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .query(req.query)
  .end(function (response) {
    if(response.error) {
      let err = new Error('A Server error.');
      err.status = 500;
      console.error(response.error);
      return next(err);
    }
    // console.log(response.status, response.headers, response.body);
    res.locals.dailyCalorie = response.body;
    next();
  });
}

export default getRecipeDailyCalorie;