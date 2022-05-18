var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.cookies)
  res.cookie("test", "test")
  res.json(req.query)


});

module.exports = router;
