import request from 'request';

const apiOptions = {
  server: "http://localhost:5000"
}; 


/**
 *  Call to the API then passes the response to renderHome function
 * @var {string} path URI for the GET meals endpoint
 * @var {object} requestOptions Defines the request
 */

const foodJoke = (req, res) => {
  const path = '/api/v1/joke';
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    if (err) return next(err);
    renderJoke(req, res, body);
  });
}

const renderJoke = (req, res, responseBody) => {
  res.render('home', { title: 'Home' });
}



/**
 * @var {string} path URI for the recipeInstructions endpoint
 * @var {object} requestOptions Defines the request
 */
const recipeInstructions = (req, res) => {
  const path = '/api/v1/recipe_instructions';
  console.log(req.query.id);

  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs: {
      id: req.query.id
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) return next(err);
    renderRecipeInstructions(req, res, body);
  });
}


/**
 * To separate the controller for rendering the view from the call to the API
 * @param {object} responseBody The returned recipe instructions, after saving in database
 */
const renderRecipeInstructions = (req, res, responseBody) => {
  // res.status(200).json(responseBody.recipe.steps);
  let ingredientList = [];
  
  // Extract the ingredient name from the response
  for (let step of responseBody.recipe.steps) { // `steps` is an array of objects, 'step`
    for (let ingredient of step.ingredients) {  // Each 'step` has `ingredients`, an array of objects or empty  
      if (!ingredientList.some(item => item.name === ingredient.name)) { // Removes repeating ingredients
        ingredientList.push(ingredient);
      }  
    } 
  }
  
  res.render('recipe_instructions', {
    title: 'Nutrio recipe instructions',
    pageHeader: {
      title: 'Recipe Instructions', 
      strapline: 'Instructions to prepare your chosen meal'
    },
    steps: responseBody.recipe.steps, 
    ingredients: ingredientList
  });
} 


const about = (req, res) => {
  res.render('about', { title: 'About page' });
}

const angularApp = (req, res) => {
  res.render('layout', { title: 'Nutrio'});  
}

export { 
  foodJoke,
  recipeInstructions,
  about,
  angularApp
};