function newSecretWord() {
    var secretWord = "CLAIM";
    return secretWord;
  }
  
  function reset() {
      $("input").val("");
    $("input").prop('disabled', false);
    $("button").prop('disabled', false);
    $(".letters").css("background-color","var(--ltgrey)");
  }
  
  var input = document.getElementById("A");
  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("validateGuessA").click();
    }
  });
  
  //JQuery ready functions
  $(document).ready(function() {
  
      document.getElementById("secretword").innerHTML = newSecretWord();
    
  //Only allow letters (and backspace) to by typed -- https://stackoverflow.com/questions/2980038/allow-text-box-only-for-letters-using-jquery
    $(".guess").on("keydown", function(event) {
      var arr = [8];
      for (var i = 65; i <= 90; i++) {
        arr.push(i);
      }
      if (jQuery.inArray(event.which, arr) === -1) {
        event.preventDefault();
      }
    });
  
    //Only allow letters to be pasted
    $(".guess").on("input", function() {
      var regexp = /[^a-zA-Z]/g;
      if ($(this).val().match(regexp)) {
        $(this).val($(this).val().replace(regexp, ''));
      }
    });
  
    var firstGuess = false;
    var secondGuess = false;
    var thirdGuess = false;
    var fourthGuess = false;
    var fifthGuess = false;
    var sixthGuess = false;
  
    $("#A").keyup(function() {
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
  
    $("#validateGuessA").click(function() {
      this.disabled = true;
      $("#A").prop('disabled', true);
  
      var validateA1 = $("#A1").val();
    var validateA2 = $("#A2").val();
    var validateA3 = $("#A3").val();
    var validateA4 = $("#A4").val();
    var validateA5 = $("#A5").val();
    var sw = newSecretWord();
    var validateSw1 = sw.charAt(0);
    var validateSw2 = sw.charAt(1);
    var validateSw3 = sw.charAt(2);
    var validateSw4 = sw.charAt(3);
    var validateSw5 = sw.charAt(4);
      
    if (validateA1 === validateSw1) {
          $("#A1").css("background-color","var(--green)");
      } else if (sw.includes(validateA1)) {
        $("#A1").css("background-color","var(--yellow)");
      } else {
        $("#A1").css("background-color","var(--red)");
      }
      if (validateA2 === validateSw2) {
          $("#A2").css("background-color","var(--green)");
      } else if (sw.includes(validateA2)) {
        $("#A2").css("background-color","var(--yellow)");
      } else {
        $("#A2").css("background-color","var(--red)");
      }
      if (validateA3 === validateSw3) {
          $("#A3").css("background-color","var(--green)");
      } else if (sw.includes(validateA3)) {
        $("#A3").css("background-color","var(--yellow)");
      } else {
        $("#A3").css("background-color","var(--red)");
      }
      if (validateA4 === validateSw4) {
          $("#A4").css("background-color","var(--green)");
      } else if (sw.includes(validateA4)) {
        $("#A4").css("background-color","var(--yellow)");
      } else {
        $("#A4").css("background-color","var(--red)");
      }
      if (validateA5 === validateSw5) {
          $("#A5").css("background-color","var(--green)");
      } else if (sw.includes(validateA5)) {
        $("#A5").css("background-color","var(--yellow)");
      } else {
        $("#A5").css("background-color","var(--red)");
      }
      });
  });