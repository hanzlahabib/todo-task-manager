var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send([{id:1, name: 'Jane'},{id:2, name: 'Jhon'}]);
});

module.exports = router;
