const quickAnswer = (req, res, next) => {
  res.status(200).send(res.locals.answer);
}

export default quickAnswer;