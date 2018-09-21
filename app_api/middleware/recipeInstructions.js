// custom modification of request body, database operations and whatnot
const recipeInstructions = (req, res, next) => {
  res.status(200).send(res.locals.recipeInfo);
}

export default recipeInstructions;