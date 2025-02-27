const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const LibrarySchema = new Schema(
  {

  }
);

const Library = model('Library', LibrarySchema);

module.exports = Library;
