const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'text is Required',
      minlength: 1,
      maxlength: 280
    },

    createdAt: {
      type: Date,
      default: Date.now,
      //USe a getter method to format the timestamp on query
      get: createdAtVal => dateFormat(createdAtVal)
    },

    username: {
      type: String,
      required: 'Username is Required',
    },

    // reactions: [ReactionSchema],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

const ReactionSchema = new Schema(
  {
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },

    reactionBody: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
       // set default value to the current timestamp
      default: Date.now,
      //USe a getter method to format the timestamp on query
      get: createdAtVal => dateFormat(createdAtVal)
    },

  },
  {
    toJSON: {
      // virtuals: true,
      getters: true
    },
    id: false
  }
);




// Create a virtual called reactionCount that retreives the length of the thought's reactions array field on query

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;