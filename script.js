function checkCode() {
  // The correct code and next clue are encoded to obscure them
  var encodedCorrectCode = "cHJpbnRlcg=="; // Base64 encoded "open sesame"
  var encodedNextClue =
    "TG9vayB1bmRlciB0aGUgbGFyZ2VzdCBwbGFudCBpbiB0aGUgb2ZmaWNlLg=="; // Base64 encoded next clue

  var correctCode = atob(encodedCorrectCode);
  var nextClue = atob(encodedNextClue);

  var userCode = document.getElementById("codeInput").value;

  if (userCode.toLowerCase() === correctCode.toLowerCase()) {
    document.getElementById("message").textContent = "";
    document.getElementById("clue").textContent = nextClue;
    document.getElementById("answer").style.display = "block";
  } else {
    document.getElementById("message").textContent =
      "Incorrect code. Try again.";
    document.getElementById("answer").style.display = "none";
  }
}
