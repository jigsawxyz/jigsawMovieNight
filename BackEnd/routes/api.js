const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ result: 1234 });
});

module.exports = router;
