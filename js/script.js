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

  $("#btn1").click(function() {

    if (turnTaking) {
      $(".Die-face").text("You Rolled " + go);

      if (go > 1) {
        current += go;
        $(".Current-score").text("Current Score : " + current);
      } else {
        current = 0;
        $(".Current-score").text("Current Score : " + current);
        // rivalPlayer();
      }
      total += current;
      $(".Total-score").text("Total Score : " + total);
    }
  });
  // $("#btn2").click(function() {
  //   if (turnTaking) {
  //     total[currentPlayer] += current;
  //     if (winnerPoints <= total[currentPlayer]) {
  //       $("#news1").text("You Won the Game!!!");
  //       turnTaking = false;
  //     } else {
  //       // rivalPlayer();
  //     }
  //   }
  // });
  // function rivalPlayer() {
  //   currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  //   current = 0;
  // }
});
