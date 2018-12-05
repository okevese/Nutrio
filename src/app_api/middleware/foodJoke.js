
// custom modification of request body, database operations and whatnot
const foodJoke = (req, res, next) => {
  res.status(200).send(res.locals.joke);
}

export default foodJoke;