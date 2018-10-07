import mongoose from 'mongoose';
import passport from 'passport';
const User = mongoose.model('User');

// TODO: Use express-validator to remove the email, password, name checks
const register = (req, res, next) => {
  if (!req.body.email || !req.body.name) {
    return sendJsonResponse(res, 422, { "message": "Email and Name feilds required" });
  }

  if (!req.body.password) {
    return sendJsonResponse(res, 422, { "message": "Password is required" });
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