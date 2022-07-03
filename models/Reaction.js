const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: String,
      required: 'text is Required',
      minlength: 1,
      maxlength: 280
    },

    reactionBody: {
      type: Date,
      default: Date.now
    },

    username: {
      type: String,
      required: 'Username is Required',
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
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// get username from email
// UserSchema.virtual('username').get(function() {
//   return this.email.slice(0, this.email.indexOf('@'));
// });





const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;