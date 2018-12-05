// custom modification of request body, database operations and whatnot
//const recipeInstructions = (req, res, next) => {
  //res.status(200).send(res.locals.recipeInfo);
//}

//export default recipeInstructions;


import mongoose from 'mongoose';
import RecipeInstructions from '../models/RecipeInstructions';

const recipeInstructions = (req, res, next) => {
  const recipe = new RecipeInstructions({
    name: res.locals.recipeInfo.name,
    steps: res.locals.recipeInfo.steps
  });

  recipe
    .save()
    .then(recipe => {
      res.status(200).json({ message: "saved success", recipe });
    })
    .catch((e) => {
      next(e);
    });
}

export default recipeInstructions;

 