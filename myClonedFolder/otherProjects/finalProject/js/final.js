$(document).ready(function() {

// Get all the nav li, add click event
$(".nav").find("li").on("click", function() {
 // remove all active class
$(".nav").find("li").removeClass("active");
// add active class to clicked it. 
 $(this).addClass("active");
var page = $(this).attr("id");
 console.log("page" + page);
getPartial(page);
 
   }); // closes the $(".nav").find("li").on("click",function()
 
  function getPartial(partial) {
 
   if (partial === "homePage") {
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data);
        $(".carousel").carousel();

      });
 
    } else if (partial === "movPage") {
     $.getJSON("jsonDatabase/final.json", function(data) {
        console.dir(data);
 
        var html = "";
        $.each(data, function(index, item) {
          html += '<div class="col-md-4 col-xs-8 col-lg-4 col-sm-4 mov">' +
             '<div class="movName">' + item.name + '</div>' +
             '<div class="movType">' + item.type + '</div>' +
             '<img class="movImg" src="' + item.image + '"/>' +
             '<div class="movSum">' + item.summary + '</div>' +
             '<div class="commentsContainer">';
           $.each(item.comments, function(index, item) {
            html += '<div class="renterName">' + item.username + '</div>' +
               '<div class="renterComment">' + item.comment + '</div>' +
               '<div class="renterStars">';
 
             var numStars = Number(item.stars)
 
             for (var i = 1; i <= 5; i++) {
              if (i <= numStars) {
                 html += '<img src="images/starF.png">';
              } else {
                html += '<img src="images/starE.png">';
              }
            }
            html += '</div>'; //end stars
          }); //each comment
 
          //do some stuff
          html += '</div>' + //commentsContainer
             '</div>'; //col-md-4
         }); //each cat
         $("#pageContent").html(html);
       }); // end 
 
       // ORDER PAGE STARTS
     } else if (partial === "orderPage") {
 
         $.get("partials/order.html", function(data) {
             $("#pageContent").html(data);
 
             //activate the datepicker
             $('#startRentDate, #endRentDate').datepicker({});
 
             //user clicks submit
             $("#submitButton").on("click", function() {
 
              //add the error class to div of empty inputs
               $("input, select").filter(function() {
               return !this.value;
              }).closest("div").addClass("has-error")
 
               //remove the error class from all filled inputs
               $("input, select").filter(function() {
                return this.value;
              }).closest("div").removeClass("has-error");

              //get all errors
              var hasError = $(".has-error");

             //if no errors
             if (hasError.length < 1) {
              sendConfirmation();
            }

          })

        }) //get
     }
       $("#pageContent").fadeIn();
 
    }
    //do when order valid
    function sendConfirmation() {
 
       //we will store all our order information here
      var order = {};
 
     //get all input values
     var inputs = $("input, select");
 
       //put all the input values into object ; this each can be done with jquery objects
       inputs.each(function() {
         var id = $(this).attr("id");
         order[id] = $(this).val();
       })
 
       //act as if sending to databse
       alert("send to databse: " + JSON.stringify(order));
 
       //show success message
       $("#successMsg").html("Order Received!<br/><br/>" +
         order.catSelect + " will be delivered on " + order.startRentDate + "<img id='paws' src='images/catPaws.jpeg'>");
     }//end sendConfirmation
 
     //begin the program, get the homepage
     getPartial("homePage");
 
  }) //ready