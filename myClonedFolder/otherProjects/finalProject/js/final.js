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
 
             var numStars = Number(item.stars);
 
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

        } else if (partial === "aboutPage") {
         $.get("partials/about.html", function(data) {
        $("#pageContent").html(data);

      });
        
    } else if (partial === "orderPage") { //ajax get order.html
                $.get("partials/order.html", function(data) {

                        $("#pageContent").html(data);

                       // $('#startRentDate, #endRentDate').datepicker({});
	                   // jQurey events in here
					   // First jQurey Event
						$("#startRentDate").on("focus", function(){
						$("#log").append("<br>Search background-color");
						$(this).css("background-color", "blue");
						})
	
						.on("blur", function(){
						$("#log").append("<br>when box not selected, turn white");
						$(this).css("background-color", "#FFF");
						});
						
						$("#submitButton").mouseenter(function(){
						$(this).text("ORDER NOW!!");
						$("#log").append("<br> Button mouseenter");
							})
						.on("mouseleave",function(){
						$("#log").append("<br>Button mouseleave");
						$(this).text("Click Me!");
						}); 
						
	
						
                        $("#submitButton").on("click", function() {

                                //get all empty inputs and select
                                //add error class to div container
                                $("input, select").filter(function() {
                                    return !this.value;
                                }).closest("div").addClass("has-error");

                                //remove error class for non empty ones
                                $("input, select").filter(function() {
                                    return this.value; //removed !
                                }).closest("div").removeClass("has-error");

                                var errors = $(".has-error");

                                if (errors.length < 1) {
                                    //alert("no errors");
                                    sendConfirmation();
                                }
									var mySearch = $("#search").val();
						var myTextbox = $("#textBox").val();
						var mySelect = $("#myChoice").val();
						var myGender = $("[name='gender']:checked").val();
		    
							/*var myCheckValues = [];
							//each is a jquery loop for objects/arrays
							// each thing is selcted, do function
							// "this" is the element we are currently looking at.
    						$("[name='vehicle']:checked").each(function() {
       						 myCheckValues.push($(this).val());
    						}); */
	
					$("#log").append("<br>User Clicked the Button");
			
					$("#log").append("<br>Value of input is: "+mySearch);
					$("#log").append("<br>Value of textarea is: "+myTextbox);
					$("#log").append("<br>Value of select is: "+mySelect);
					//$("#log").append("<br>Value of check values is: "+myCheckValues.join());
		
		
					} 
                            ); //click
                    }); //get
            }
            $("#pageContent").fadeIn();

        }
		
        function sendConfirmation() {
            //make an object to record data for database;
            var order = {};
            //get all teh jquery objects
            var formData = $("input, select");
            //for each jquery object
            formData.each(function() {
                var id = $(this).attr("id");//get the id of the element
                order[id] = $(this).val();//set the field and the value
            });

            alert("Sending to database " + JSON.stringify(order));
            $("#successMsg").html("Order Received!<br/><br/>" +
              order.catSelect + " will be delivered on " + 
              order.startRentDate +
              "<img id='paws' src='images/catPaws.jpeg'>");

        } //sendConfirmation

        //begin the program, get the homepage
        getPartial("homePage");

    }); //ready