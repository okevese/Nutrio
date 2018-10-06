import mongoose from 'mongoose';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

const User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'email'
}, (email, password, done) => {
  User.findOne({ email: username })
    .then((user) => {
      if(!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }

      if(!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });  
      }
      return done(null, user);
    })
    .catch(done);
}));