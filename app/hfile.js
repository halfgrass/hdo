/**
 * Created by baungo on 2016/11/3.
 */
var fs = require('fs');
var HFile = function(title){
    this.info = {};
    this.info.title = title;
}

HFile.prototype.createHead = function () {
    var head = '---\n';
    console.log(this.info)
    for(var key in this.info){
        head += key+': ' + this.info[key] + '\n';
    }
    return head += '---\n';
}

HFile.prototype.create = function(path){
    var fileName = '';
    fs.writeFileSync(path, '', 'utf-8');
}
HFile.prototype.setTitle = function (title) {
    this.info.title = title;
}

HFile.prototype.setProperty = function (k, v) {
    this.info[k] = v;
}
HFile.prototype.getProperty = function (k) {
    return this.info[k];
}


//test
var hf = new HFile('hello');
hf.setProperty('date', +new Date);
console.log(hf.getProperty('date'));
var head = hf.createHead()
console.log(head)