const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const AvatarSchema = new Schema(
  {

  }
);

const Avatar = model('Avatar', AvatarSchema);

module.exports = Avatar;
