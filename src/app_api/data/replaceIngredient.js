
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.replace_ingredient;
const secret = config.food_api_secret;


const testData = {
  ingredientName: 'butter'
};


const getReplaceIngredient =  (req, res, next) => {
  const url = host + endpoint;
  console.log(req.query);

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .query(req.query)
  .end(response => {
    if(response.error) {
      let err = new Error('Server error');
      err.status = 500;
      return next(err);
    }
    // Ingredient substitute could not be found on the server.
    if (!(response.body.ingredient || response.body.substitutes)) {
      let err = new Error('Could not find any substitutes for that ingredient');
      err.status = 404;
      return next(err);
    }
    res.status(200).send(response.body);
  });
};

export default getReplaceIngredient;