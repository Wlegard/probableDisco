const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SearchSchema = new Schema({
  // active image idle image user id
  idleImage: String,
  activeImage: String,
  userId: Number,
});

const Search = model('Search', SearchSchema);

module.exports = Search;
