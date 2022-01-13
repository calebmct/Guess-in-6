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
  
  //JQuery ready functions
  $(document).ready(function() {
  
      $("#A").focus();
      
    document.getElementById("secretword").innerHTML = newSecretWord();
    
      $(".guess").on("select",function() { //NOT WORKING - needs to NOT allow the highlight function. Not sure if syntax is correct
          $(this).selectionStart = $(".guess").selectionEnd;
      }, false);
    
    $(".guess").on("blur",function() {
        var blurInput = $(this);
        setTimeout(function() {
          blurInput.focus()
      }, 10);
    });
    
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
  
  //"Enter" submits answer
    $("#A").on("keydown", function(event) {
      if (event.keyCode === 13 && $(this).val().length == 5) {
       event.preventDefault();
       document.getElementById("validateGuessA").click();
      }
    });
    $("#B").on("keydown", function(event) {
      if (event.keyCode === 13 && $(this).val().length == 5) {
       event.preventDefault();
       document.getElementById("validateGuessB").click();
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
    
    $("#B").keyup(function() {
      var uno = $(this).val().charAt(0).toUpperCase();
      var dos = $(this).val().charAt(1).toUpperCase();
      var tres = $(this).val().charAt(2).toUpperCase();
      var cuatro = $(this).val().charAt(3).toUpperCase();
      var cinco = $(this).val().charAt(4).toUpperCase();
      $("#B1").val(uno);
      $("#B2").val(dos);
      $("#B3").val(tres);
      $("#B4").val(cuatro);
      $("#B5").val(cinco);
    });
  
    $("#validateGuessA").click(function() {
        if ($("#A").val().length != 5) {
          return false;
    } else {
          this.disabled = true;
        $("#B").prop('disabled',false);
        $("#A").prop('disabled', true);
        $("#B").focus();
  
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
      }
      });
    $("#validateGuessB").click(function() {
      this.disabled = true;
      $("#B").prop('disabled', true);
  
      var validateB1 = $("#B1").val();
    var validateB2 = $("#B2").val();
    var validateB3 = $("#B3").val();
    var validateB4 = $("#B4").val();
    var validateB5 = $("#B5").val();
    var sw = newSecretWord();
    var validateSw1 = sw.charAt(0);
    var validateSw2 = sw.charAt(1);
    var validateSw3 = sw.charAt(2);
    var validateSw4 = sw.charAt(3);
    var validateSw5 = sw.charAt(4);
      
    if (validateB1 === validateSw1) {
          $("#B1").css("background-color","var(--green)");
      } else if (sw.includes(validateB1)) {
        $("#B1").css("background-color","var(--yellow)");
      } else {
        $("#B1").css("background-color","var(--red)");
      }
      if (validateB2 === validateSw2) {
          $("#B2").css("background-color","var(--green)");
      } else if (sw.includes(validateB2)) {
        $("#B2").css("background-color","var(--yellow)");
      } else {
        $("#B2").css("background-color","var(--red)");
      }
      if (validateB3 === validateSw3) {
          $("#B3").css("background-color","var(--green)");
      } else if (sw.includes(validateB3)) {
        $("#B3").css("background-color","var(--yellow)");
      } else {
        $("#B3").css("background-color","var(--red)");
      }
      if (validateB4 === validateSw4) {
          $("#B4").css("background-color","var(--green)");
      } else if (sw.includes(validateB4)) {
        $("#B4").css("background-color","var(--yellow)");
      } else {
        $("#B4").css("background-color","var(--red)");
      }
      if (validateB5 === validateSw5) {
          $("#B5").css("background-color","var(--green)");
      } else if (sw.includes(validateB5)) {
        $("#B5").css("background-color","var(--yellow)");
      } else {
        $("#B5").css("background-color","var(--red)");
      }
      });
  });