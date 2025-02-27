const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SettingsSchema = new Schema(
  {

  }
);

const Settings = model('Settings', SettingsSchema);

module.exports = Settings;
