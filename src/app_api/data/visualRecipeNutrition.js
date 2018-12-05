
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.visual_nutrition;
const secret = config.food_api_secret;

// Visualize a recipe's nutrition data
const getVisualRecipeNutrition = () => {

  return (req, res, next) => {
    const url = host + endpoint;
  
    unirest.post(url)
    .header("X-Mashape-Key", secret)
    .header("Accept", "text/html")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("defaultCss=true")
    .send("ingredientList=3 oz flour")
    .send("servings=2")
    .send("showBacklink=true")
    .end(function (response) {
      if(response.error) {
        let err = new Error('A problem occured.');

         // `error` and `code` are properties of the unirest response object
        err.status = response.status;
        console.error(response.error);
        return next(err);
      }
      res.locals.visualNutrition = response.body;
      next();
      console.log(response.status, response.headers, response.body);
    });
  }
}


export default getVisualRecipeNutrition;