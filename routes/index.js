var express = require('express');
var app = express();
var router = express.Router();

/* view setup */
var variablesToPass =
{
  // Global.
  title: 'ContentMine',
  librariesPath: '/javascripts/libraries/',
  imagesPath: '/images/',
  faviconPath: '/images/favicon/',
  // Menu.
  iconsPath: '/images/icons/',
  // Content.
  outputValue: 'Command output...'
};



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', variablesToPass);
});

/* POST, form */
router.post('/', function(req, res){
    variablesToPass.outputValue = res.commandOutput;
    res.render('index', variablesToPass);
});

module.exports = router;
