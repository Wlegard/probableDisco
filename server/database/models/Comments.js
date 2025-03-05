const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CommentsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    songId: {
      type: Schema.Types.ObjectId,
      // assuming our songs are stored in the Library model
      ref: 'Library',
      required: true,
    }
  },
  // this adds createdAt and updatedAt
  { timestamps: true }
);

const Comments = model('Comments', CommentsSchema);

module.exports = Comments;




// const mongoose = require('mongoose');

// const { Schema, model } = mongoose;

// const CommentsSchema = new Schema(
//   {

//   }
// );

// const Comments = model('Comments', CommentsSchema);

// module.exports = Comments;
