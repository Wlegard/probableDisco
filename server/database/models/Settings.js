const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SettingsSchema = new Schema(
  {
    themeName: String,
    primaryColor: String,
    secondaryColor: String,
    tertiaryColor: String,
    cursor: String,
    font: String,
    borderRadius: Number,
    userId: Number,
  },
);

const Settings = model('Settings', SettingsSchema);

module.exports = Settings;
