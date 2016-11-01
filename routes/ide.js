/**
 * Created by Administrator on 2016/11/1.
 */
var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
/*    console.log('ideee');

    fs.readFile(__dirname+'/ide/index.html',function(err, data){
        if(err){
            console.log(err);
        }
        console.log(data)
        res.end(data);
    });*/
    res.render('ide/editor', { title: 'Express' });
});

module.exports = router;
