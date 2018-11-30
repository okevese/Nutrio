const unauthorized = (err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({ "message": `${err.name} : ${err.message}` });
  }
}

export default unauthorized;