import request from 'request';

const apiOptions = {
  server: "http://localhost:5000"
}; 

// TODO: Set up error views page


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
 *  Call to the API then passes the response to renderHome function
 * @var {string} path URI for the GET meals endpoint
 * @var {object} requestOptions Defines the request
 */

const foodTrivia = (req, res) => {
  const path = '/api/v1/trivia';
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {}
  };
  request(requestOptions, (err, response, body) => {
    if (err) return next(err);
    renderHome(req, res, body);
  });
}


/**
 * To separate the controller for rendering the view from the call to the API
 * @param {object} responseBody Response from call to `api/v1/trivia`
 */
const renderHome = (req, res, responseBody) => {
  res.render('home', { 
    title: 'Nutrio',
    trivia: responseBody.text
  });
}


/**
 *  Call to the API then passes the response to renderMealPlan function
 * @var {string} path URI for the GET meals endpoint
 * @var {object} requestOptions Defines the request
 */

const mealPlan = (req, res) => {
  const path = '/api/v1/meal_plan';
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs:{
      diet: req.query.diet,
      exclude: req.query.exclude,
      targetCalories: req.query.calories,
      timeFrame: 'day'
    }
  }; 
  request(requestOptions, (err, response, body) => {
    if (err) return next(err);  
    renderMealPlan(req, res, body);
  });
}



/** To separate the controller for rendering the view from the call to the API
 * @param {object} responseBody Response from call to '/api/v1/meal_plan, the object saved in DB
 */

const renderMealPlan = (req, res, responseBody) => {
  //console.log(responseBody.mealPlan.meals[0].id);
  let message;
  if (!(responseBody.mealPlan.meals instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  }
  res.render('meal_plan', {
    title: 'Nutrio meal plans',
    pageHeader: {
      title: 'Meal Plan', 
      strapline: 'Generate a meal plan with three meals per day!'
    },
    meals: responseBody.mealPlan.meals,
    nutrients: responseBody.mealPlan.nutrients,
    message: message
  });
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


/**
 *  Call to the API then passes the response to renderRecipeDailyCalorie function
 * @var {string} path URI for the GET meals endpoint
 * @var {object} requestOptions Defines the request
 */

const recipeDailyCalorie = (req, res) => {
  const path = '/api/v1/daily_calorie_recipe';
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs:{
      targetCalories: req.query.calories,
      timeFrame: 'day'
    }
  };
  request(requestOptions, (err, response, body) => {
    if (err) return next(err);  
    renderRecipeDailyCalorie(req, res, body);
  });
}


/**
 * To separate the controller for rendering the view from the call to the API
 * @param {object} responseBody Response from call to `api/v1/daily_calorie_recipe`
 */

const renderRecipeDailyCalorie = (req, res, responseBody) => {
  let message;
  res.render('daily_calorie', {
    title: 'Daily Calories',
    pageHeader: {
      title: 'Daily Calorie Recipes', 
      strapline: 'Find multiple recipes that, when added up, reach your daily caloric needs.'
    },
    meals: responseBody.recipeDailyCalorie.meals,
    nutrients: responseBody.recipeDailyCalorie.nutrients,
    message: message
  });
}


/**
 * 
 * @var {object} ingredientName  The name of the ingredient to be replaced
 */
const replaceIngredient = (req, res) => {
  const path = '/api/v1/replace_ingredient';
  const requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs: {
      ingredientName: req.query.ingredientName
    }
  };
  request(requestOptions, (err, response, body) => {
    renderReplaceIngredient(req, res, body);
  });
}


const renderReplaceIngredient = (req, res, responseBody) => {
  res.render('replace_ingredient', {
    title: 'Replace Ingredient',
    pageHeader: {
      title: 'Replace an Ingredient',
      strapline: 'Enter an ingredient to find it\'s nearest alternative'
    }
  });
}

const about = (req, res) => {
  res.render('about', { title: 'About page' });
}

export { 
  foodJoke,
  foodTrivia,
  mealPlan,
  recipeDailyCalorie,
  recipeInstructions,
  replaceIngredient,
  about
};