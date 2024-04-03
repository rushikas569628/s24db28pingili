var hat = require('../model/hat');
// List of all hats
exports.hat_list = function(req, res) {
res.send('NOT IMPLEMENTED: Hat list');
};
// for a specific hat.
exports.hat_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Hat detail: ' + req.params.id);
};
// Handle hat create on POST.
exports.hat_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Hat create POST');
};
// Handle hat delete from on DELETE.
exports.hat_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Hat delete DELETE ' + req.params.id);
};
// Handle hat update form on PUT.
exports.hat_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Hat update PUT' + req.params.id);
};
