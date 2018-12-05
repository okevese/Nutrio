
const unknownRoute = (req, res, next) => {
  let err = new Error('Page does not exist!');
  err.status = 404;
  next(err);
};

export default unknownRoute;
