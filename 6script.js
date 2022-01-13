function newSecretWord() {
    var secretWord = "CLAIM";
    return secretWord;
  }
//Only allow letters (and backspace) to by typed -- https://stackoverflow.com/questions/2980038/allow-text-box-only-for-letters-using-jquery
$(document).ready(function(){
    $(".guess").on("keydown",function(event) {
        var arr = [8];
        for(var i = 65; i <= 90; i++){
        arr.push(i);
    }
    if(jQuery.inArray(event.which, arr) === -1){
        event.preventDefault();
    }
    });
});

//Only allow letters to be pasted
$(document).ready(function(){
    $(".guess").on("input", function(){
    var regexp = /[^a-zA-Z]/g;
    if($(this).val().match(regexp)){
        $(this).val( $(this).val().replace(regexp,'') );
    }
    });
});

var firstGuess = false;
var secondGuess = false;
var thirdGuess = false;
var fourthGuess = false;
var fifthGuess = false;
var sixthGuess = false;

$(document).ready(function(){
    $("#A").keyup(function () {
        var uno = $(this).val().charAt(0).toUpperCase();
    var dos = $(this).val().charAt(1).toUpperCase();
    var tres = $(this).val().charAt(2).toUpperCase();
    var cuatro = $(this).val().charAt(3).toUpperCase();
    var cinco = $(this).val().charAt(4).toUpperCase();
        $("#A1").val(uno);
    $("#A2").val(dos);
    $("#A3").val(tres);
    $("#A4").val(cuatro);
    $("#A5").val(cinco);
    });
});
$(document).ready(function(){
    $("#validateGuessA").click(function() {
    this.disabled = true;
    $("#A").prop('disabled',true);
    });
});

function validateA() {
	var validateA1 = document.getElementById("#A1").value.charAt(0);
  var validateA2 = document.getElementById("#A2").value.charAt(1);
  var validateA3 = document.getElementById("#A3").value.charAt(2);
  var validateA4 = document.getElementById("#A4").value.charAt(3);
  var validateA5 = document.getElementById("#A5").value.charAt(4);
  var validateSw1 = newSecretWord().value.charAt(0);
  var validateSw2 = newSecretWord().value.charAt(1);
  var validateSw3 = newSecretWord().value.charAt(2);
  var validateSw4 = newSecretWord().value.charAt(3);
  var validateSw5 = newSecretWord().value.charAt(4);
  document.getElementById("testValidate").innerHTML = "TRUTH";
  }