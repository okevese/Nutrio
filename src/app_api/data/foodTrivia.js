
import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.trivia;
const secret = config.food_api_secret;

console.log(host);
console.log('before secret');
console.log(secret);
console.log('after secret');
console.log(endpoint);

console.log('Just before getFoodTrivia');
const getFoodTrivia = (req, res, next) => {
  const url = host + endpoint;
  console.log(url);
  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .end(function (response) {
    if(response.error) {
      let err = new Error('A problem occured.');

      // `error` and `status` are properties of the unirest response object
      err.status = response.status;
      console.error(response.error);
      return next(err);
    }
    console.log(response.body);
    res.locals.trivia = response.body;
    next();
    console.log(response.status, response.headers, response.body);
  });
}

export default getFoodTrivia;