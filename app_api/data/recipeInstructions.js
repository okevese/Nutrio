import unirest from 'unirest';
import config from '../../config/index';
const secret = config.food_api_secret;
const host = config.spoonacular_api.hostname;

const getRecipeInstructions = (req, res, next) => {
  const endpoint = `/recipes/${req.param.id}/analyzedInstructions`;
  const url = host + endpoint;
  
  console.log(url);
  console.log(req.param.id);

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .end(function(response) {
    if (response.error) {
      let err = new Error('A Server Error.');
      err.status = 500;
      console.error(response.error);
      return next(err);
    }
    console.log(response.status, response.headers, response.body);
    res.locals.recipeInfo = response.body;
    next();
  });
};

export default getRecipeInstructions;
