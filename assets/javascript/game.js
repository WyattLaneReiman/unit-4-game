
//assigns random number to guess
$(document).ready(function() {
    var randomNumber = (Math.floor(Math.random() * 101) + 19);

    $("#random").text(randomNumber);

//assigns crystals a random number 

var purple = Math.floor(Math.random()*11+1)
var blue = Math.floor(Math.random()*11+1)
var green = Math.floor(Math.random()*11+1)
var pink = Math.floor(Math.random()*11+1)

var userTotal = 0;
var wins = 0;
var losses = 0;

$("#win").text("Wins : " + wins);
$("#loss").text("Losses : " + losses);

function reset () {
    randomNumber = (Math.floor(Math.random() * 101) + 19);
    $("#random").text(randomNumber);
    console.log(randomNumber);
    var purple = Math.floor(Math.random()*11+1)
    var blue = Math.floor(Math.random()*11+1)
    var green = Math.floor(Math.random()*11+1)
    var pink = Math.floor(Math.random()*11+1)
    userTotal = 0;
    $("#your").text("Your total score is : " + userTotal);
    console.log(purple, blue, green, pink);
};

function winner () {
    alert ("YOU WIN!!!!!");
    wins++;
    $("#win").text("Wins : " + wins);
    reset();
};
function loser () {
    alert ("YOU LOSE!!! >:(");
    losses++;
    $("#loss").text("Losses : " + losses);
    reset();
};
//set up buttons 
$('#button1').on ('click', function(){
    userTotal = userTotal + blue;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          loser();
        }   
  });  
  $('#button2').on ('click', function(){
    userTotal = userTotal + purple;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          loser();
        }   
  });  
  $('#button3').on ('click', function(){
    userTotal = userTotal + pink;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          loser();
        }   
  }); 
  $('#button4').on ('click', function(){
    userTotal = userTotal + green;
    console.log("New userTotal= " + userTotal);
    $('#score').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == randomNumber){
          winner();
        }
        else if ( userTotal > randomNumber){
          loser();
        }   
  });  


});