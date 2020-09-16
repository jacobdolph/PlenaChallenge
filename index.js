function submitButton() {
  event.preventDefault();
  let word = document.getElementById("word").value.split("");
  let newWord = "";
  let repeatedLetters = "";
  for (i = 0; i < word.length; i++) {
    let a = 0;
    for (j = 0; j < word.length; j++) {
      if (word[j] == word[i]) {
        a += 1;
      }
    }
    a !== 1 ? (repeatedLetters += word[i]) : (newWord += word[i]);
  }

  let correctWord = newWord.concat(repeatedLetters);
  let headerTwo = document.createElement("h1");
  headerTwo.innerText = correctWord;
  let solution = document.getElementById("correctString");
  solution.append(headerTwo);
  if (solution.childNodes[1]) {
    solution.removeChild(solution.childNodes[0]);
  }
}

let input = document.getElementById("word");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("word-submit").click();
  }
});
