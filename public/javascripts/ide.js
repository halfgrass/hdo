/**
 * Created by baungo on 2016/11/2.
 */
$(function(){
    $('#editor').keyup(function(){
        var md = document.getElementById("editor").innerText;
        var html = markdown.toHTML(md);
        document.getElementById("preview").innerHTML = html;
        localStorage.setItem('index', md);
    })
})