const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

//index
  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.console(err);
      res.status(500);
      res.json({status:500, error: err});
    });
  });

//show a single card
router.get('/:id', (req, res) => {
  const id = req.params.id;
  collection
  .findOne({_id: ObjectId(id)})
  .then((doc) => res.json(doc))
  .catch((err) => {
    console.console(err);
    res.status(500);
    res.json({status:500, error: err});
  });
});

// update a question
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  delete updatedData._id;

  collection
  .findOneAndUpdate({ _id: ObjectId(id) }, { $set: updatedData })
  .then(result => {
    res.json(result.value);
  })
  .catch((err) => {
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

  return router;
}
module.exports = createRouter;
