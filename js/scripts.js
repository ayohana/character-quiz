$(document).ready(function() {
  $("form#myForm").submit(function(event) {
    
    var scoreOne = parseInt($("#q1").val());
    var scoreTwo = parseInt($("#q2").val());
    var scoreThree = parseInt($("#q3").val());
    var scoreFour = parseInt($("#q4").val());
    var scoreFive = parseInt($("#q5").val());
    
    var totalScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive)

    // alert(totalScore); //to check totalScore

    if (totalScore >=30) {
       alert("Kramer");
       $("img").hide();
       $("img#result-kramer").show(); 
      }  else if (totalScore >= 20 && totalScore < 30 ){
      alert("Dwight");
      $("img").hide();
      $("img#result-dwight").show(); 
      }  else if (totalScore < 20) {
        alert("Veronica Mars");
        $("img").hide();
        $("img#result-veronica").show(); 
      }

      event.preventDefault();
  });
});

    
   

 