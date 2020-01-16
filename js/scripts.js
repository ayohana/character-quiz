$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    var rollerCoaster = parseInt($("input#q1").val());
    var score = 0;

    if (rollerCoaster === 10) {
      score = 10;
      alert(score);
    } else if (rollerCoaster < 10 && rollerCoaster >= 5) {
      score = 5;
      alert(score);
    } else {
      score = 0;
      alert(score);
    }

    
    //////////////////front end//////////////////
    if (score >= 10) {
      $("#result").show();
      $("#celebName").empty().append("Keanu Reeves");
      $("#totalScore").empty().append(" " + score);
      // show #result
      // show #celebName
      // show #totalScore
      // your match is Keanu Reeves
    } else if (score ===5) {
      $("#result").show();
      $("#celebName").empty().append("Danny Devito");
      $("#totalScore").empty().append(" " + score);
      // your natch is danny devito
    } else { 
      $("#result").show();
      $("#celebName").empty().append("Hulk Hogan");
      $("#totalScore").empty().append(" " + score);
      // your match is hulk hogan
  
    }


  });
});