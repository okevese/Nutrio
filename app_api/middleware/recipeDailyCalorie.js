
// custom modification of request body, database operations and whatnot
const recipeDailyCalorie = (req, res, next) => {
  res.status(200).send(res.locals.dailyCalorie);
}

export default recipeDailyCalorie;