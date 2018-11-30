import unirest from 'unirest';
import config from '../../config/index';

const host = config.spoonacular_api.hostname;
const endpoint = config.spoonacular_api.endpoints.answer;
const secret = config.food_api_secret;

const testData = { 
  q: 'how much vitamin c is in 2 apples?'
};


// Answer a nutrition related natural language question.
const getQuickAnswer = (req, res, next) => {

  const url = host + endpoint;

  unirest.get(url)
  .header("X-Mashape-Key", secret)
  .header("Accept", "application/json")
  .query(testData)
  .end(response => {
    if(response.error) {
      let err = new Error('A problem occured');

      // `error` and `status` are properties of the unirest response object
      err.status = response.status;
      return next(err);
    }
    console.log(response.status, response.headers, response.body);
    res.locals.answer = response.body;
    next();
  });
};


export default getQuickAnswer;