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
// List of all Costumes
exports.hat_list = async function(req, res) {
    try{
    thehat = await hat.find();
    res.send(thehat);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.hat_view_all_Page = async function(req, res) {
    try{
    thehat = await hat.find();
    res.render('hat', { title: 'Hat Search Results', results: thehat });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    //Handle Costume create on POST.
exports.hat_create_post = async function(req, res) {
console.log(req.body)
let document = new hat();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.hat_style = req.body.hat_style;
document.price = req.body.price;
document.size = req.body.size;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

    
       
    