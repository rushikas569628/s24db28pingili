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
// List of all hats
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
    //Handle hat create on POST.
exports.hat_create_post = async function(req, res) {
console.log(req.body)
let document = new hat();
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
// for a specific hat.
exports.hat_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await hat.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};
// Handle hat update form on PUT.
exports.hat_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await hat.findById( req.params.id)
// Do updates of properties
if(req.body.hat_style)
toUpdate.hat_style = req.body.hat_style;
if(req.body.price) toUpdate.price = req.body.price;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle hat delete on DELETE.
exports.hat_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await hat.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

//s4
// Handle hat delete on DELETE.
exports.hat_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await hat.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    //s6

    // Handle a show one view with id specified by query
exports.hat_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await hat.findById( req.query.id)
    res.render('hatdetail',
    { title: 'hat Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a hat.
// No body, no in path parameter, no query.
// Does not need to be async
exports.hat_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('hatcreate', { title: 'Hat Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a hat.
    // query provides the id
    exports.hat_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await hat.findById(req.query.id)
    res.render('hatupdate', { title: 'hat Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    }


    
       
    