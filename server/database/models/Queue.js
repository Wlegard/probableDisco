const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const QueueSchema = new Schema(
  {

  }
);

const Queue = model('Queue', QueueSchema);

module.exports = Queue;
