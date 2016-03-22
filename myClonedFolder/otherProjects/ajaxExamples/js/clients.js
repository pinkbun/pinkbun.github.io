$(document).ready(function(){
$("#getClients").on("click", function(){
    
    var url =""
    $.getJSON("ABSOLOUTE URL OF CLIENTS JSON", function (data){
      var hml = "<table class='table table-hover table-stiped'>"+
      "<tr><th>Name</th><th>Email</th><th>Company</th></tr>"
     $.each(data,function(index, item){
        $("#data").append(item.name);
         html+="<tr>"+
             "<td>"+ item.name +"</td>" +
             "<td>"+item.email +"</td>" +
             "<td>"+item.comapany +"</td>" +
             "</tr>";
    })
     html += "</table>";
    $("#data").append(html);
        // console.dir(data);
    })
})
    
})