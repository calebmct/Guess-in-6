function newSecretWord() {
  var secretWord = "CLAIM";
  return secretWord;
}

function reset() {
  $("input").val("");
  $("input").prop('disabled', false);
  $("button").prop('disabled', false);
  $(".letters").css("background-color", "var(--ltgrey)");
}

//JQuery ready functions
$(document).ready(function() {

      $("#A").focus();

      document.getElementById("secretword").innerHTML = newSecretWord();

      $(".guess").on("select", function() { //NOT WORKING - needs to NOT allow the highlight function. Not sure if syntax is correct
        $(this).selectionStart = $(".guess").selectionEnd;
      }, false);

      $(".guess").on("blur", function() {
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

//Inputs typed letters into corresponding inputs displayed
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

//Validation when submitting answers
      $("#validateGuessA").click(function() {
          if ($("#A").val().length != 5) {
            return false;
          } else {
            this.disabled = true;
            $("#B").prop('disabled', false);
            $("#A").prop('disabled', true);
            $("#B").focus();

            var validateA1 = $("#A1").val();
            var validateA2 = $("#A2").val();
            var validateA3 = $("#A3").val();
            var validateA4 = $("#A4").val();
            var validateA5 = $("#A5").val();
            var sw = newSecretWord();
            var swL = newSecretWord();
            var validateSw1 = sw.charAt(0);
            var validateSw2 = sw.charAt(1);
            var validateSw3 = sw.charAt(2);
            var validateSw4 = sw.charAt(3);
            var validateSw5 = sw.charAt(4);

            if (validateA1 === validateSw1) {
              var a1GCheck = true;
            } else {
              var a1GCheck = false;
            }
            if (validateA2 === validateSw2) {
              var a2GCheck = true;
            } else {
              var a2GCheck = false;
            }
            if (validateA3 === validateSw3) {
              var a3GCheck = true;
            } else {
              var a3GCheck = false;
            }
            if (validateA4 === validateSw4) {
              var a4GCheck = true;
            } else {
              var a4GCheck = false;
            }
            if (validateA5 === validateSw5) {
              var a5GCheck = true;
            } else {
              var a5GCheck = false;
            }
            
            if (a1GCheck === true) {
	            var AAA = swL.replace(swL.charAt(0),"_");
              $("#A1").css("background-color", "var(--green)");
            } else {
            	var AAA = swL;
            }
            if (a2GCheck === true) {
	            var AAB = AAA.replace(AAA.charAt(1),"_");
              $("#A2").css("background-color", "var(--green)");
            } else {
            	var AAB = AAA;
            }
            if (a3GCheck === true) {
	            var AAC = AAB.replace(AAB.charAt(2),"_");
              $("#A3").css("background-color", "var(--green)");
            } else {
            	var AAC = AAB;
            }
            if (a4GCheck === true) {
	            var AAD = AAC.replace(AAC.charAt(3),"_");
              $("#A4").css("background-color", "var(--green)");
            } else {
            	var AAD = AAC;
            }
            if (a5GCheck === true) {
	            var AAE = AAD.replace(AAD.charAt(4),"_");
              $("#A5").css("background-color", "var(--green)");
            } else {
            	var AAE = AAD;
            }
						
            document.getElementById("testValidate").innerHTML = AAE;
            
            if (AAE.includes(validateA1)) {
            	$("#A1").css("background-color","var(--yellow)");
              let indexed = AAE.indexOf(validateA1);
              var ABE = AAE.replace(AAE.charAt(indexed),"_");
            } else if (AAE.charAt(0) != "_") {
            	$("#A1").css("background-color","var(--dkgrey)");
              var ABE = AAE;
            } else {
              var ABE = AAE;
            }
            if (ABE.includes(validateA2)) {
            	$("#A2").css("background-color","var(--yellow)");
              let indexed = ABE.indexOf(validateA2);
              var ACE = ABE.replace(ABE.charAt(indexed),"_");
            } else if (ABE.charAt(1) != "_") {
            	$("#A2").css("background-color","var(--dkgrey)");
              var ACE = ABE;
            } else {
            	var ACE = ABE;
            }
            if (ACE.includes(validateA3)) {
            	$("#A3").css("background-color","var(--yellow)");
              let indexed = ACE.indexOf(validateA3);
              var ADE = ACE.replace(ACE.charAt(indexed),"_");
            } else if (ACE.charAt(2) != "_") {
            	$("#A3").css("background-color","var(--dkgrey)");
              var ADE = ACE;
            } else {
            	var ADE = ACE;
            }
            if (ADE.includes(validateA4)) {
            	$("#A4").css("background-color","var(--yellow)");
              let indexed = ADE.indexOf(validateA4);
              var AEE = ADE.replace(ADE.charAt(indexed),"_");
            } else if (ADE.charAt(3) != "_") {
            	$("#A4").css("background-color","var(--dkgrey)");
              var AEE = ADE;
            } else {
            	var AEE = ADE;
            }
            if (AEE.includes(validateA5)) {
            	$("#A5").css("background-color","var(--yellow)");
              let indexed = AEE.indexOf(validateA5);
              var AFE = AEE.replace(AEE.charAt(indexed),"_");
            } else if (AEE.charAt(4) != "_") {
            	$("#A5").css("background-color","var(--dkgrey)");
              var AFE = AEE;
            } else {
            	var AFE = AEE;
            }
            
						document.getElementById("testValidate2").innerHTML = AFE;
       }
   });
   // SECOND GUESS VALIDATION

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
            $("#B1").css("background-color", "var(--green)");
          } else if (sw.includes(validateB1)) {
            $("#B1").css("background-color", "var(--yellow)");
          } else {
            $("#B1").css("background-color", "var(--dkgrey)");
          }
          if (validateB2 === validateSw2) {
            $("#B2").css("background-color", "var(--green)");
          } else if (sw.includes(validateB2)) {
            $("#B2").css("background-color", "var(--yellow)");
          } else {
            $("#B2").css("background-color", "var(--dkgrey)");
          }
          if (validateB3 === validateSw3) {
            $("#B3").css("background-color", "var(--green)");
          } else if (sw.includes(validateB3)) {
            $("#B3").css("background-color", "var(--yellow)");
          } else {
            $("#B3").css("background-color", "var(--dkgrey)");
          }
          if (validateB4 === validateSw4) {
            $("#B4").css("background-color", "var(--green)");
          } else if (sw.includes(validateB4)) {
            $("#B4").css("background-color", "var(--yellow)");
          } else {
            $("#B4").css("background-color", "var(--dkgrey)");
          }
          if (validateB5 === validateSw5) {
            $("#B5").css("background-color", "var(--green)");
          } else if (sw.includes(validateB5)) {
            $("#B5").css("background-color", "var(--yellow)");
          } else {
            $("#B5").css("background-color", "var(--dkgrey)");
          }
        });
      });