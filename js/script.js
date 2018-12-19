//Business Logic
$(document).ready(function() {
  var currentPlayer = 0;
  var turnTaking = true;
  var maxOne = 6;
  var minOne = 1;
  var total = 0;
  var current = 0;
  var go = Math.floor(Math.random() * (maxOne - minOne + 1));
  var rollButton = $("#btn1").first;
  var holdButton = $("#btn2").first;
  var winnerPoints = 100;


  //User Interface
  $("#btn1").click(function() {
    if (turnTaking) {
      $(".Die-face").text("You Rolled " + go);
      if (go > 1) {
        current += go;
        $(".Current-score").text("Current Score : " + current);
      } else {
        current = 0;
        $(".Current-score").text("Current Score : " + current);
      }
      total += current;
      $(".Total-score").text("Total Score : " + total);
    }
  });
});
