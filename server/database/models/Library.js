const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const LibrarySchema = new Schema(
  {
    // userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Owner of the library
    name: String,
    playlists: [
      {
        name: String,
        description: String,
        tracks: [
          {
            trackId: Number,
            title: String,
            artist: String, 
            album: String, 
            duration: Number,
          }
        ],
      }
    ],
  },
  { timestamps: true }
);

const Library = model('Library', LibrarySchema);

module.exports = Library;
