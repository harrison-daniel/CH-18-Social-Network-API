const { Schema, model } = require('mongoose');

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
      default: Date.now
    },

    username: {
      type: String,
      required: 'Username is Required',
    },

    reactions: [ReactionSchema],

  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// get username from email
// UserSchema.virtual('username').get(function() {
//   return this.email.slice(0, this.email.indexOf('@'));
// });

// Create a virtual called reactionCount that retreives the length of the thought's reactions array field on query

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;