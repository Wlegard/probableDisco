const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SongsSchema = new Schema(
  {
   'id': Number,
   'readable': Boolean,
   'title': String,
   'link': String,
   'rank': Number,
   'artist': String,
   'album': String

  }
);

const Songs = model('Song', SongsSchema);

module.exports = Songs;