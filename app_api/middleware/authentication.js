import mongoose from 'mongoose';
import passport from 'passport';
import { validationResult } from 'express-validator/check';

const User = mongoose.model('User');


const register = (req, res, next) => {
  // Finds the validation errors in this request and wraps them in an object
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


const login = (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(412).json({ errors: errors.array() });
  } 

  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);

    if(user) {
      const token = user.generateJwt();
      sendJsonResponse(res, 200, {
        "token": token
      });
    } else {
      sendJsonResponse(res, 401, info);
    }
  })(req, res, next); // Makes `req, res, next` available to passport
}



const sendJsonResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
}

export { register, login };