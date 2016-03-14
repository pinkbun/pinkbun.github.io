$(document).ready(function(){

    
    // $("#log").append("<br>added some text");

$("#mySingleLineText").on("focus", function (){  
    $(this).css("background-color","#F7F8E0");
    $("#log").append("<br>input focus");
})
        .on("blur", function (){
    $("#log").append("<br>input leave");
            $(this).css("background-color","#FFF");
});

    
$("#mySelect").on("change", function (){
    $("#log").append("<br>input change");
    var val = $(this).val();
        $("#mySelectMessage").html("<br>" + val + " is a nice selection!");
});
    
$("#myButton").on("mouseenter", function (){
    $("#log").append("<br>Button mouseenter");
    $(this).text("ORDER NOW!!!");
})
.on("mouseleave", function (){
    $("#log").append("<br>Button mouseleave");
    $(this).text("Click me!");
});

    
$("#myButton").on("click", function (){    

    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextarea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val();
    

    
    //each is a jquery loop for objects/arrays
    //each thing that is selected, do the function
    //"this" is the element we are currently Looking at
  
    var allVals = [];
    $("[name='vehicle']:checked").each(function() {
        allVals.push($(this).val());
    });

    
    $("#log").append("<br>User clicked the button"); 
    
    $("#log").append("<br>Value of input is: "+myInput); 
    $("#log").append("<br>Value of textarea is: "+myTextarea);
    $("#log").append("<br>Value of select: "+mySelect);
    $("#log").append("<br>Value of radio button is "+myRadio);
    $("#log").append("<br>Value of check is: "+allVals.join());
    
    // $("#log").append("<br>");
    
});
    
});