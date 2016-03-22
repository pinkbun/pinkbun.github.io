$(document).ready(function(){
    
    $.getJSON("http://pinkbun.github.io/myClonedFolder/otherProjects/ajaxExamples/jsonDatabase/jsonBun.html",function(data){
        console.dir(data);
        
        var html = "";
        $.each(data, function(index, item){
        html += '<div class="col-md-4 bun">' +
            '<div class="bunName"></div>' +item.name+'</div>'+
            '<div class="bunType"></div>' +item.type+'</div>'+
            '<div class="bunGender"></div>' +item.gender+'</div>'+
            '<img src="'; +item.image + '/>"';
        //do some stuff
        html += '</div>';
        }) //each cat
        $("#catData").append(html);
    })
})
/*
// one per bun
<div class="col-md-4 bun">
<div class="bunName"></div>
<div class="bunType"></div>
<div class="bunGender"></div>
<img src=""/>
    <div class="commentsContainer">
        <div class="renterName"></div>
        <div class="renterLocation"></div>
        <div class="renterStars"></div>
        //5 stars, some empty
    </div> //end starts
</div> //end bun
*/