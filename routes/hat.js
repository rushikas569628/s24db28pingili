var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hat', { title: 'Search Results for Class Hat' });
});

module.exports = router;
var express = require('express');
const hat_controllers= require('../controllers/hat');
var router = express.Router();
/* GET costumes */
router.get('/', hat_controllers.hat_view_all_Page );
module.exports = router;
