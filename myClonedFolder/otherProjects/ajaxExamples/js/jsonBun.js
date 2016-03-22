$(document).ready(function(){
    
    $.getJSON("http://pinkbun.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/jsonBun.html",function(data){
        console.dir(data);
    })
})