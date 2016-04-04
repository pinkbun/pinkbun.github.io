$.get("http://pinkbun.github.io/myClonedFolder/otherProjects/FinalProject/partials/nav.html", function(data){
     
$(document).ready(function() {
        
     $(".container").prepend(data);
     $(".container").fadeIn();
     }) 
})


