import unirest from 'unirest';
import config from '../../config/index';
const secret = config.food_api_secret;
const host = config.spoonacular_api.hostname;

const getRecipeInstructions = (req, res, next) => {
  const endpoint = `/recipes/${req.params.mealid}/analyzedInstructions`;
  const url = host + endpoint;
  
  console.log(url);

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .end(function(response) {
    if (response.error) {
      let err = new Error('Something happened.');
      
      // `error` and `code` are properties of the unirest response object
      err.status = response.code;
      console.error(response.error);
      return next(err);
    }
    res.status(200).send(response.body[0]);
  });
};

export default getRecipeInstructions;
