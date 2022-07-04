const router = require('express').Router();


const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById
} = require('../../controllers/thought-controller');

// /api/thoughts

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThoughtById)
  .delete(deleteThoughtById);
// router
//   .route('/')
  // GET to get all thoughts
  // .get(getAllThoughts)

  // GET to get a single thought by its _id
  // .get(getThoughtById)

  // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
  // .post(createThought)

  // PUT to update a thought by its _id
  // .put(updateThoughtById)

  // DELETE to remove a thought by its _id
  // .delete(deleteThoughtById);



// /api/thoughts/:thoughtId/reactions
// router
  // ?? '/:userId'
  // .route('/:thoughtId/reactions')
  
  // POST to create a reaction stored in a single thought's reactions array field
  // .post()

  // DELETE to pull and remove a reaction by the reaction's reactionId value
  // .delete();


module.exports = router;