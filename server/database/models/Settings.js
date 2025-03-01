const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const SettingsSchema = new Schema(
  {
    loadoutName: String,
    appSetting: {
      primaryColor: String,
      secondaryColor: String,

    },
    avatarSettings: {},
    commentsSettings: {},
    librarySettings: {},
    queueSettings: {},
    settingsSettings: {},
    userId: Number,
  },
);

const Settings = model('Settings', SettingsSchema);

module.exports = Settings;
