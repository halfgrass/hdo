/**
 * Created by baungo on 2016/11/3.
 */
var yaml = require('yaml');

module.exports.id =  function(seed){
    var conf = yaml.load('app.yml');
    //TODO rewrite app.yml
    if(conf.id.num){
        return eval(id.lastest+id.policy);
    }else{
        return eval(id.lastest+id.policy);
    }
}