const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const sox = { name: 'Sox', age: 100, cool: true };
  // res.send('Hey! It works!');
  // res.json(sox); // displays json on client
  // res.send(req.query.name); // displays html from params
  // res.json(req.query); // displays json from params
  res.render('hello', {
    name: 'Sox',
    dog: 'Bay'
  });
});

module.exports = router;
