
// custom modification of request body, database operations and whatnot
const foodTrivia = (req, res, next) => {
  res.status(200).send(res.locals.trivia);
}

export default foodTrivia;


