const visualRecipeNutrition = (req, res, next) => {
  res.status(200).send(res.locals.visualNutrition);
}

export default visualRecipeNutrition;