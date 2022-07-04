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
        ref: 'Thought'
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);


// Create a virtual called friendCount that retreives the length of the user's friends array field on query

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});


const User = model('User', UserSchema);

module.exports = User;
