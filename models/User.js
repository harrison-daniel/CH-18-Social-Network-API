const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: 'username is Required',
      trim: true,
    },

    email: {
      type: String,
      required: 'email is Required',
      unique: true,
      match: [/.+\@.+\..+/, 'Please enter in a valid -mail address']
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ThoughtArray'
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'UserArray'
      }
    ],

    userCreated: {
      type: Date,
      default: Date.now
    }
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

// Create a virtual called friendCount that retreives the length of the user's friends array field on query

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;
