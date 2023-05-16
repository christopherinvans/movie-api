const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { string } = require('prop-types');

let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    ImagePath: String
  });
  
  let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });
  
  // does the actual hashing of submitted passwords
  userSchema.statics.hashPassword = (password) => {
    return bcrypt.hashSync(password, 10);
  };
  
  // compares submitted hashed passwords with the hashed passwords stored in your database
  userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.Password);
  };
  
  let Movie = mongoose.model('Movie', movieSchema);
  let User = mongoose.model('User', userSchema);
  
  module.exports.Movie = Movie;
  module.exports.User = User;