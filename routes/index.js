var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* POST, form */
router.post('/', function(req, res){
    req.app.locals.vars.outputValue = res.commandOutput;
    res.render('index');
});

module.exports = router;
