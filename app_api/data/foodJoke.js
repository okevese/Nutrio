
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.jokes;
const secret = config.food_api_secret;

const getFoodJoke = (req, res, next) => {
  const url = host + endpoint;
  
  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .end(response => {
    if(response.error) {
      let err = new Error('A Server error.');
      err.status = 500;
      console.error(response.error);
      return next(err);
    }
    // console.log(response.status, response.headers, response.body);
    res.locals.joke = response.body;
    next();
  });
}
export default getFoodJoke;