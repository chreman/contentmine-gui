var express = require('express');
var router = express.Router();

/* view setup */
var variablesToPass =
{
  title: 'ContentMine',
  librariesPath: '/javascripts/libraries/',
  imagesPath: '/images/',
  faviconPath: '/images/favicon/',
  iconsPath: '/images/icons/'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', variablesToPass);
});

module.exports = router;
