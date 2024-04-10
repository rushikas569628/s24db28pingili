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
/* GET hats */
router.get('/', hat_controllers.hat_view_all_Page );
router.get('/hat/:id', hat_controllers.hat_detail);

/* GET detail hat page */
router.get('/detail', hat_controllers.hat_view_one_Page);

module.exports = router;