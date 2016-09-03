var express = require('express');
var router = express.Router();

/* view setup */
var objectToPass =
{
  title: 'ContentMine',
  iconsPath: "/images/icons/"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', objectToPass);
});

module.exports = router;
