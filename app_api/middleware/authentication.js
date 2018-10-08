import mongoose from 'mongoose';
import passport from 'passport';
import { validationResult } from 'express-validator/check';

const User = mongoose.model('User');

// TODO: Use express-validator to remove the email, password, name checks
const register = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(412).json({ errors: errors.array() });
  } 

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;

  // Use setPassword userschema method to set salt and hash
  user.setPassword(req.body.password);

  user.save()
    .then(() => {
      const token = user.generateJwt();
      sendJsonResponse(res, 200, { "token": token });
    })
    .catch(next);
}

const sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
}

export { register };