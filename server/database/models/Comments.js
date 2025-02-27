const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CommentsSchema = new Schema(
  {

  }
);

const Comments = model('Comments', CommentsSchema);

module.exports = Comments;
