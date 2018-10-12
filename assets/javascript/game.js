$( document ).ready(function(){
    
    // Generate a random number to guess
    var Random=Math.floor(Math.random()*120+19)
    
    // Display random number
    $('#scoreToMatch').text(Random);
    
    //Generate random number for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    // Variables to keep track of wins, losses and total
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
   $('#wins').text(wins);
  $('#losses').text(losses);
   // Reset game
  function reset(){
        Random=Math.floor(Math.random()*120+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  // Display wins
  function victory(){
  alert("Winner! Winner!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  // Display losses
  function loser(){
  alert ("Better luck next time.");
    losses++;
    $('#losses').text(losses);
    reset()
  }
  // Clicking crystals
    $('.azure').on ('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            //Win & lose conditions
          if (playerTotal == Random){
            victory();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('.red').on ('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            victory();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.green').on ('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
             if (playerTotal == Random){
            victory();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('.diamond').on ('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            victory();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  }); 