var express = require('express');
var router = express.Router();
var passport = require('passport');

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
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  res.redirect("/login");
  }
  router.get('/update',secured, hat_controllers.hat_update_Page);
/* GET detail hat page */
router.get('/detail',secured, hat_controllers.hat_view_one_Page);
/* GET create hat page */
router.get('/create', hat_controllers.hat_create_Page);
/* GET create update page */
// A little function to check if we have an authorized user and continue on or
// redirect to login.


/* GET delete hat page */
router.get('/delete',secured, hat_controllers.hat_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
  });
  

module.exports = router;