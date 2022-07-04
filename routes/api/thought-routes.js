const router = require('express').Router();


const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
   // GET to get all thoughts
  .get(getAllThoughts);

  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router
  .route('/:userId')
  .post(createThought);


router
  .route('/:thoughtId')
    // GET to get a single thought by its _id
  .get(getThoughtById)

  // PUT to update a thought by its _id
  .put(updateThoughtById)

  // DELETE to remove a thought by its _id
  .delete(deleteThoughtById);


// /api/thoughts/:thoughtId/reactions
 router
   .route('/:thoughtId/reactions')
  
  // POST to create a reaction stored in a single thought's reactions array field
   .post(addReaction)

  // DELETE to pull and remove a reaction by the reaction's reactionId value
router
  .route('/:thoughtId/reactions/:reactionId')
  
  .delete(deleteReaction);




module.exports = router;