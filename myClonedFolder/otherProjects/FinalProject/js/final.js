$(document).ready(function(){
	
	// Get all the nav li, add click event
	$(".nav").find("li").on("click",function(){
		// remove all active class
		$(".nav").find("li").removeClass("active");
		// add active class to clicked it. 
		$(this).addClass("active");
		var page = $(this).attr("id");
		console.log("page" +page);
		getPartial(page);
	
	});// closes the $(".nav").find("li").on("click",function()
	
	function getPartial(partial) {
		
		if (partial === "homePage"){
				$.get("partials/home.html", function(data){
					$("#pageContent").html(data);
					$(".carousel").carousel();
					
		});
		
		}else if (partial === "secondPage"){
					$.getJSON("jsonDatabase/final.json",function(data){
		 console.dir(data);

                    var html = "";
                    $.each(data, function (index, item) {
                        html += '<div class="col-md-4 bun">' +
                            '<div class="bunName">' + item.name + '</div>' +
                            '<div class="bunType">' + item.type + '</div>' +
                            '<div class="bunGender">' + item.gender + '</div>' +
                            '<img class="bunImg" src="' + item.image + '"/>' +
                            '<div class="commentsContainer">';
                        $.each(item.comments, function (index, item) {
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
		}else if (partial === "thirdPage"){
			
		$.get("partials/contact.html", function (data) {
                    $("#pageContent").html(data);

                    $("#mySingleLineText").on("focus", function () {
                            $(this).css("background-color", "#F7F8E0");
                            $("#log").append("<br>input focus");
                        })
                        .on("blur", function () {
                            $("#log").append("<br>input leave");
                            $(this).css("background-color", "#FFF");
                        });


                    $("#mySelect").on("change", function () {
                        $("#log").append("<br>input change");
                        var val = $(this).val();
                        $("#mySelectMessage").html("<br>" + val + " is a nice selection!");
                    });

                    $("#myButton").on("mouseenter", function () {
                            $("#log").append("<br>Button mouseenter");
                            $(this).text("ORDER NOW!!!");
                        })
                        .on("mouseleave", function () {
                            $("#log").append("<br>Button mouseleave");
                            $(this).text("Click me!");
                        });


                    $("#myButton").on("click", function () {

                        var myInput = $("#mySingleLineText").val();
                        var myTextarea = $("#myTextarea").val();
                        var mySelect = $("#mySelect").val();
                        var myRadio = $("[name='gender']:checked").val();



                        //each is a jquery loop for objects/arrays
                        //each thing that is selected, do the function
                        //"this" is the element we are currently Looking at

                        var allVals = [];
                        $("[name='vehicle']:checked").each(function () {
                            allVals.push($(this).val());
                        });


                        $("#log").append("<br>User clicked the button");
                        $("#log").append("<br>Value of input is: " + myInput);
                        $("#log").append("<br>Value of textarea is: " + myTextarea);
                        $("#log").append("<br>Value of select: " + mySelect);
                        $("#log").append("<br>Value of radio button is " + myRadio);
                        $("#log").append("<br>Value of check is: " + allVals.join());

                        // $("#log").append("<br>");

                    }); //contact    	 

		}); 
			
			}
	}
	// begin Program, get the homepage
	getPartial("homePage");
	
}); //closes document ready. 