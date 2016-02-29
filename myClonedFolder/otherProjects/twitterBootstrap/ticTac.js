$(document).ready(function() {

  var circleOrEx = "o"; // what does this variable represent
// The "o" in the game of tic tac toe.
  var isGameInProgress = true; // what does this variable represent
// Validating that the game is in progress
  var winningCombos = { // what does this variable represent; explain what the keys and values represent
// This means possible winning combinations for this game, the key starts the count as 1 because in
// Javascript 0 is noted as 1 instead of 1 = 1, it is 0=1.
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // Explain what this event does
// This even is upon a click that the first click is an "o" and else it is a "x"
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// Explain these conditions
// If the game is in progress then it checks if this has a class named "empty"
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //Explain
// Running of this class won 

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // Explain what this event does
// Produces another game if you hit the button
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable
// using a new board using the ID board to find the div's 
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
// filter is finding if the criteria for it to work is met
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what is this if statement doing?
// if firstEmptyMemorySquare is equal to 1 then it proceeds
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //Explain this each function
// it's adding the class empty and saying that the game is in progress by saying true
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
// This function is checking if player has won by looping through winning combos and if it's on a 
// chosen square
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //Explain this nested for loop
// Looping for losing player 
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
// Checks board and div to find if player loses
          playerWon = false;
        }
      }

      if (playerWon) { //Explain the condition and every line in the block
// The condition is if the player has won

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Explain this condition
// The winner is coloured green
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //this exits the loop
      }
    }


  }
})