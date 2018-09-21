
// custom modification of request body, database operations and whatnot
const replaceIngredient = (req, res, next) => {
  res.status(200).send(res.locals.ingredient);
}

export default replaceIngredient;