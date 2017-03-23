
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { appTitle: 'Chore Tracker: submit your Chore Requests'});
};
