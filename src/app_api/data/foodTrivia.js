
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.trivia;
const secret = config.food_api_secret;



const getFoodTrivia = (req, res, next) => {
  const url = host + endpoint;
  
  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .end(response => {
    if(response.error) {
      let err = new Error('A problem occured.');
      
      // `error` and `status` are properties of the unirest response object
      err.status = response.status;
      console.error(response.error);
      return next(err);
    }
    res.locals.trivia = response.body;
    next();
  });
}

export default getFoodTrivia;