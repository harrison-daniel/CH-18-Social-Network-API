const { Thought, User } = require('../models');

const thoughtController = {

  // /api/thoughts

    // GET to get all thoughts
    getAllThoughts(req, res) {
      Thought.find({})
        // .populate({
        //   path: 'comments',
        //   select: '-__v'
        // })
        // .select('-__v')
        // .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // GET to get a single thought by its _id
    getThoughtById({ params }, res) {
      Thought.findOne({ _id: params.thoughtId })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
            res.json(dbUserData)
        })
  
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },

    // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
    createThought({params, body}, res) {
      Thought.create(body)
      .then(({ _id}) => {
          console.log(_id)
          return User.findOneAndUpdate(
              { _id: params.userId},
              {$push: {thoughts: _id}},
              {new: true, runValidators: true}
          )
      })
      .then(dbThoughtData => {
          if (!dbThoughtData) {
              res.status(404).json({ message: "No user found with this id"})
              return;
          }
          res.json(dbThoughtData);
      })
      .catch(err => {
          console.log(err);
          res.status(400).json(err);
      })
  },

    // PUT to update a thought by its _id
    updateThoughtById({ params, body }, res) {
      Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    // DELETE to remove a thought by its _id
    deleteThoughtById({ params }, res) {
      Thought.findOneAndDelete({ _id: params.thoughtId })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

  //  /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reacctions array field
    addReaction({ params, body }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $push: { reactions: body }},
        { new: true, runValidators: true }
        )
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
          .catch(err => res.json(err));
    },
    // DELETE to pull and remove a reaction by the reaction's reactionId value
    deleteReaction({ params }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } }},
        { new: true, runValidators: true }
        )
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
          .catch(err => res.json(err));
    }
  };



module.exports = thoughtController;
