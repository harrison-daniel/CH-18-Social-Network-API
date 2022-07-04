const { Thought, User } = require('../models');

const thoughtController = {

  // /api/thoughts

    // GET to get all thoughts
    getAllThoughts(req, res) {
      User.find({})
        // .populate({
        //   path: 'comments',
        //   select: '-__v'
        // })
        // .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
          console.log(err);
          res.sendStatus(400);
        });
    },
  
    // GET to get a single thought by its _id
    getThoughtById({ params }, res) {
      User.findOne({ _id: params.thoughtId })
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .populate({
          path: 'friends',
          select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
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

    // PUT to update a thought by its _id

    // DELETE to remove a thought by its _id


  //  /api/thoughts/:thoughtId/reactions

    // POST to create a reaction stored in a single thought's reacctions array field

    // DELETE to pull and remove a reaction by the reaction's reactionId value

};



module.exports = thoughtController;
