//var mysql = require('mysql');
//var connection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'runbogao',
//    database:'Project'
//});
/* GET home page. */

module.exports = function(app){
    app.get('/', function (req, res) {
        res.redirect('./main');
    });
    app.use('/signup', require('./signup'));
    app.use('/login', require('./login'));
    app.use('/main', require('./main'));
    app.use('/search', require('./search'));
    app.use('/detail', require('./detail'));
    app.use('/groups', require('./groups'));
    app.use('/group_detail', require('./group_detail'));
    app.use('/meetings', require('./meetings'));
    app.use('/tags', require('./tags'));
    app.use('/user', require('./user'));
    app.use('/posts', require('./posts'));
    app.use('/logout', require('./logout'));
    app.use('/reviewhis', require('./reviewhis'));
    app.use('/comment', require('./comment'));
    app.use('/meeting_detail', require('./meeting_detail'));
    app.use('/joingroup', require('./joingroup'));
    app.use('/leavegroup', require('./leavegroup'));
    app.use('/creategroup', require('./creategroup'));
    app.use('/createmeeting', require('./createmeeting'));
    app.use('/registerm', require('./registerm'));
    app.use('/cancelm', require('./cancelm'));
    app.use('/reviewmeeting', require('./reviewmeeting'));
    app.use('/seereport', require('./seereport'));
    app.use(function (req, res) {
      if (!res.headersSent) {
        res.render('404');
      }
    });

  };
