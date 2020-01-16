$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    event.preventDefault();
    
    var scoreOne = parseInt($("#q1").val());
    var scoreTwo = parseInt($("#q2").val());
    var scoreThree = parseInt($("#q3").val());
    var scoreFour = parseInt($("#q4").val());
    var scoreFive = parseInt($("#q5").val());
    
    var totalScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive)

    alert(totalScore);

    

    if (totalScore >=30) {
       alert("Kramer"); 
      }  else if (totalScore >= 20 && totalScore < 30 ){
      alert("Dwight");
      }  else if (totalScore < 20) {
        alert("Veronica Mars");
      }
  });
});

    
   

 