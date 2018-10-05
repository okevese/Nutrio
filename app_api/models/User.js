import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  hash: String,
  salt: String
});


/**
 * @description Creates a random string for the salt, 
 * and for encrypting the password and salt into the hash. 
 * This is added to the model instance.
*/
userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');

  // crypto.pbkdf2(password, salt, iterations, keylen, digest, callback)
  // Read http://nodejs.cn/doc/node/crypto.html#crypto_crypto_pbkdf2_password_salt_iterations_keylen_digest_callback
  this.hash = crypto.pbkdf2(password, this.salt, 10000, 512, 'sha512', (err, key) => {
      if (err) throw err;
      key.toString('hex');
    });
}


/**
 * @description Carries out the same encryption on the password the user 
 * is trying to log in with, and see if it matches the stored value.
 * @returns {Boolean} Valid password
 */
userSchema.methods.validPassword = function(password) {
  const hash = crypto.pbkdf2(password, this.salt, 10000, 512, 'sha512', (err, key) => {
    if (err) throw err;
    key.toString('hex');
  });
  return this.hash === hash;
}

userSchema.methods.generateJwt = function() {
  // Create expiry date and set for 7 days
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7); 

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  }, process.env.JWT_SECRET);
}

const User = mongoose.model("User", userSchema);
export default User;