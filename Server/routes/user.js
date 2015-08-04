var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    'host' : '', 
    'user' : '', 
    'password' : '', 
    'database' : '',
});


//친구검색
router.get('/:user_id', function(req, res, next) {
    connection.query('SELECT user_name FROM user WHERE user_name=?;', 
                     [req.params.user_id], function (error, cursor) {
        res.json(cursor);
    });
});

module.exports = router;