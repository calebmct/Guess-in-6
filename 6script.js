function reset() {
  $("input").val("");
  $("input").prop('disabled', true);
  $("#A").prop('disabled', false);
  $("button").prop('disabled', true);
  $("#validateGuessA").prop('disabled', false);
  $(".letters").css("background-color", "var(--ltgrey)");
  newSecretWord();
}

//JQuery ready functions
$(document).ready(function() {

document.getElementById("secretword").innerHTML = newSecretWord();

	function newSecretWord() {
    var secretWord = "CLAMM";
    document.getElementById("newWordd").innerHTML = secretWord;
    return secretWord;
  }
/*
	$("#newWord").click(function() {
    var newWordz = document.getElementById("newWord").innerHTML; //replace with dataIndex once index is created
    console.log(newWordz + "test");
  }); */
  
//  document.getElementById("newWord").click();

  $("#A").focus();

  $(".guess").on("select", function() { //NOT WORKING - needs to NOT allow the highlight function. Not sure if syntax is correct
    $(this).selectionStart = $(this).selectionEnd;
  }, false);

  /*$(".guess").on("blur", function() {
    var blurInput = $(this);
    setTimeout(function() {
      blurInput.focus()
    }, 10);*/
});
// TO DO LIST //
/*
 - no "select all" function
 - index of common 5-letter words
 - randomize word selection on load and "new puzzle" button
 - add keyboard layout that updates letters based on guesses, with "ENTER" and "BACKSPACE" keys
 - "new puzzle" resets and functions normally
 - on correct guess, show the word with some type of congrats message
 - on 6th incorrect guess - apology message and reveal the word, with option to play with a new word
 - button to "give up" that will end the guessing and reveal the word
 - add instructions pop up
 - test/optimize for mobile
 - refine CSS/styling
 - add favicon

*/

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

// GLOBAL VARS

var sw;
var swL = sw;
var guess;
var lOne;
var lTwo;
var lThree;
var lFour;
var lFive;
var lastGuess;
var valButton;
var nextGuess;
var AAA;
var AAB;
var AAC;
var AAD;
var AAE;
var ABE;
var ACE;
var ADE;
var AEE;
var AFE;
var swVal1;
var swVal2;
var swVal3;
var swVal4;
var swVal5;
var guessClass;

function newWord(){
		window.setTimeout(function() { 
    	sw = document.getElementById("newWordd").innerHTML;
	    console.log(sw + " newz");
    }, 100);
}
newWord();
//"Enter" submits answer
$("#A").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessA").click();
    console.log(sw);
  }
});
$("#B").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessB").click();
  }
});
$("#C").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessC").click();
  }
});
$("#D").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessD").click();
  }
});
$("#E").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessE").click();
  }
});
$("#F").on("keydown", function(event) {
  if (event.keyCode === 13 && $(this).val().length == 5) {
    event.preventDefault();
    document.getElementById("validateGuessF").click();
  }
});

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

$("#C").keyup(function() {
  var uno = $(this).val().charAt(0).toUpperCase();
  var dos = $(this).val().charAt(1).toUpperCase();
  var tres = $(this).val().charAt(2).toUpperCase();
  var cuatro = $(this).val().charAt(3).toUpperCase();
  var cinco = $(this).val().charAt(4).toUpperCase();
  $("#C1").val(uno);
  $("#C2").val(dos);
  $("#C3").val(tres);
  $("#C4").val(cuatro);
  $("#C5").val(cinco);
});

$("#D").keyup(function() {
  var uno = $(this).val().charAt(0).toUpperCase();
  var dos = $(this).val().charAt(1).toUpperCase();
  var tres = $(this).val().charAt(2).toUpperCase();
  var cuatro = $(this).val().charAt(3).toUpperCase();
  var cinco = $(this).val().charAt(4).toUpperCase();
  $("#D1").val(uno);
  $("#D2").val(dos);
  $("#D3").val(tres);
  $("#D4").val(cuatro);
  $("#D5").val(cinco);
});

$("#E").keyup(function() {
  var uno = $(this).val().charAt(0).toUpperCase();
  var dos = $(this).val().charAt(1).toUpperCase();
  var tres = $(this).val().charAt(2).toUpperCase();
  var cuatro = $(this).val().charAt(3).toUpperCase();
  var cinco = $(this).val().charAt(4).toUpperCase();
  $("#E1").val(uno);
  $("#E2").val(dos);
  $("#E3").val(tres);
  $("#E4").val(cuatro);
  $("#E5").val(cinco);
});

$("#F").keyup(function() {
  var uno = $(this).val().charAt(0).toUpperCase();
  var dos = $(this).val().charAt(1).toUpperCase();
  var tres = $(this).val().charAt(2).toUpperCase();
  var cuatro = $(this).val().charAt(3).toUpperCase();
  var cinco = $(this).val().charAt(4).toUpperCase();
  $("#F1").val(uno);
  $("#F2").val(dos);
  $("#F3").val(tres);
  $("#F4").val(cuatro);
  $("#F5").val(cinco);
});

//Validation when submitting answers

$("#validateGuessA").click(function() {
  if ($("#A").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});

$("#validateGuessB").click(function() {
  if ($("#B").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});
$("#validateGuessC").click(function() {
  if ($("#C").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});
$("#validateGuessD").click(function() {
  if ($("#D").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});
$("#validateGuessE").click(function() {
  if ($("#E").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});
$("#validateGuessF").click(function() {
  if ($("#F").val().length != 5) {
    return false;
  } else {
    validateHit();
    validateGuess();
  }
});

function validateHit() {
  var aLen = $("#A").val().length;
  var bLen = $("#B").val().length;
  var cLen = $("#C").val().length;
  var dLen = $("#D").val().length;
  var eLen = $("#E").val().length;
  var fLen = $("#F").val().length;

  if ((aLen + bLen + cLen + dLen + eLen + fLen) === 30) {
    return {
      guess: "#F",
      lOne: "#F1",
      lTwo: "#F2",
      lThree: "#F3",
      lFour: "#F4",
      lFive: "#F5",
      lastGuess: true,
      valButton: "#validateGuessF",
      guessClass: ".sixth"
    }

  } else if ((aLen + bLen + cLen + dLen + eLen + fLen) === 25) {
    $("#F").prop('disabled', false);
    $("#F").focus();
    return {
      guess: "#E",
      lOne: "#E1",
      lTwo: "#E2",
      lThree: "#E3",
      lFour: "#E4",
      lFive: "#E5",
      lastGuess: false,
      valButton: "#validateGuessE",
      guessClass: ".fifth"
    }

  } else if ((aLen + bLen + cLen + dLen + eLen + fLen) === 20) {
    $("#E").prop('disabled', false);
    $("#E").focus();
    return {
      guess: "#D",
      lOne: "#D1",
      lTwo: "#D2",
      lThree: "#D3",
      lFour: "#D4",
      lFive: "#D5",
      lastGuess: false,
      valButton: "#validateGuessD",
      guessClass: ".fourth"
    }
  } else if ((aLen + bLen + cLen + dLen + eLen + fLen) === 15) {
    $("#D").prop('disabled', false);
    $("#D").focus();
    return {
      guess: "#C",
      lOne: "#C1",
      lTwo: "#C2",
      lThree: "#C3",
      lFour: "#C4",
      lFive: "#C5",
      lastGuess: false,
      valButton: "#validateGuessC",
      guessClass: ".third"
    }
  } else if ((aLen + bLen + cLen + dLen + eLen + fLen) === 10) {
    $("#C").prop('disabled', false);
    $("#C").focus();
    console.log("second");
    return {
      guess: "#B",
      lOne: "#B1",
      lTwo: "#B2",
      lThree: "#B3",
      lFour: "#B4",
      lFive: "#B5",
      lastGuess: false,
      valButton: "#validateGuessB",
      guessClass: ".second"
    };
  } else if ((aLen + bLen + cLen + dLen + eLen + fLen) === 5) {
    $("#B").prop('disabled', false);
    $("#B").focus();
    console.log("first");
    return {
      guess: "#A",
      lOne: "#A1",
      lTwo: "#A2",
      lThree: "#A3",
      lFour: "#A4",
      lFive: "#A5",
      lastGuess: false,
      valButton: "#validateGuessA",
      guessClass: ".first"
    };
  }
}


function validVars() {
  var guesses = validateHit();
  return {
    validate1: $(guesses.lOne).val(),
    validate2: $(guesses.lTwo).val(),
    validate3: $(guesses.lThree).val(),
    validate4: $(guesses.lFour).val(),
    validate5: $(guesses.lFive).val(),
    swVal1: sw.charAt(0),
    swVal2: sw.charAt(1),
    swVal3: sw.charAt(2),
    swVal4: sw.charAt(3),
    swVal5: sw.charAt(4)
  }
}

function validateGuess() {
  var guessVar = validateHit();
  var valVar = validVars();
  //disables all inputs and buttons on last guess
  if (guessVar.lastGuess === true) {
    $("input").prop('disabled', true);
    $(".val-check").prop('disabled', true);
  } else {
    $(guessVar.valButton).prop('disabled', true);
    $(guessVar.guess).prop('disabled', true);
    $(guessVar.guessClass).prop('disabled', true);
  }
  //initial check for correct letters in correct placements
  if (valVar.validate1 === valVar.swVal1) {
    AAA = "";
    $(guessVar.lOne).css("background-color", "var(--green)");
  } else {
    AAA = valVar.swVal1;
  }
  if (valVar.validate2 === valVar.swVal2) {
    AAB = "";
    $(guessVar.lTwo).css("background-color", "var(--green)");
  } else {
    AAB = valVar.swVal2;
  }
  if (valVar.validate3 === valVar.swVal3) {
    AAC = "";
    $(guessVar.lThree).css("background-color", "var(--green)");
  } else {
    AAC = valVar.swVal3;
  }
  if (valVar.validate4 === valVar.swVal4) {
    AAD = "";
    $(guessVar.lFour).css("background-color", "var(--green)");
  } else {
    AAD = valVar.swVal4;
  }
  if (valVar.validate5 === valVar.swVal5) {
    AAE = AAA + AAB + AAC + AAD;
    $(guessVar.lFive).css("background-color", "var(--green)");
  } else {
    AAE = AAA + AAB + AAC + AAD + valVar.swVal5;
  }

  validateYellow(AAE);
}

function validateYellow(e) {
  var lastPass = e;
  var guessVar = validateHit();
  var valVar = validVars();
  console.log("activated YELLOW!" + lastPass);
  if (valVar.validate1 === valVar.swVal1) {
    ABE = lastPass;
  } else if (lastPass.includes(valVar.validate1)) {
    $(guessVar.lOne).css("background-color", "var(--yellow)");
    let indexed = lastPass.indexOf(valVar.validate1);
    ABE = lastPass.replace(lastPass.charAt(indexed), "");
  } else {
    $(guessVar.lOne).css("background-color", "var(--dkgrey)");
    ABE = lastPass;
  }

  if (valVar.validate2 === valVar.swVal2) {
    ACE = ABE;
  } else if (ABE.includes(valVar.validate2)) {
    $(guessVar.lTwo).css("background-color", "var(--yellow)");
    let indexed = ABE.indexOf(valVar.validate2);
    ACE = ABE.replace(ABE.charAt(indexed), "");
  } else {
    $(guessVar.lTwo).css("background-color", "var(--dkgrey)");
    ACE = ABE;
  }

  if (valVar.validate3 === valVar.swVal3) {
    ADE = ACE;
  } else if (ACE.includes(valVar.validate3)) {
    $(guessVar.lThree).css("background-color", "var(--yellow)");
    let indexed = ACE.indexOf(valVar.validate3);
    ADE = ACE.replace(ACE.charAt(indexed), "");
  } else {
    $(guessVar.lThree).css("background-color", "var(--dkgrey)");
    ADE = ACE;
  }

  if (valVar.validate4 === valVar.swVal4) {
    AEE = ADE;
  } else if (ADE.includes(valVar.validate4)) {
    $(guessVar.lFour).css("background-color", "var(--yellow)");
    let indexed = ADE.indexOf(valVar.validate4);
    AEE = ADE.replace(ADE.charAt(indexed), "");
  } else {
    $(guessVar.lFour).css("background-color", "var(--dkgrey)");
    AEE = ADE;
  }

  if (valVar.validate5 === valVar.swVal5) {
    AFE = AEE;
  } else if (AEE.includes(valVar.validate5)) {
    $(guessVar.lFive).css("background-color", "var(--yellow)");
    let indexed = AEE.indexOf(valVar.validate5);
    AFE = AEE.replace(AEE.charAt(indexed), "");
  } else {
    $(guessVar.lFive).css("background-color", "var(--dkgrey)");
    AFE = AEE;
  }
}