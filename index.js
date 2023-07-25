const audio = document.getElementById("backgroundMusic");
audio.volume = 0.05;
let i = 0;
var result = 0;

function mute() {
  let audio = document.getElementById("backgroundMusic");
  let audioIcon = document.getElementById("muteAudio");
  audio.muted = !audio.muted;

  audioIcon.src =
    audioIcon.alt === "unmuted"
      ? "img/muted.png"
      : "img/unmuted.png";
  audioIcon.alt = audioIcon.alt === "unmuted" ? "muted" : "unmuted";
}

const togglePlayer = (playerNumber) => {
  let opponentSwitchImg =
    document.getElementsByClassName("opponent-img")[playerNumber];
  let opponentText =
    document.getElementsByClassName("opponent-text")[playerNumber];

  opponentSwitchImg.src =
    opponentSwitchImg.alt === "humen"
      ? "img/bot.png"
      : "img/humen.png";
  opponentSwitchImg.alt = opponentSwitchImg.alt === "humen" ? "bot" : "humen";
  opponentText.textContent =
    opponentSwitchImg.alt === "humen" ? "player" : "bot";
};

function switchScreen() {
  document.getElementById("menu").style.display =
    document.getElementById("menu").style.display === "none" ? "" : "none";

  document.getElementById("tic-tac-toe").style.display =
    document.getElementById("tic-tac-toe").style.display === "none"
      ? "block"
      : "none";
      document.getElementsByClassName("turn")[0].textContent = document.getElementsByClassName("opponent-text")[0].innerHTML + " X"
  restart();
}

function checkWin(a, b, c) {
  let blur = document.getElementById("tic-tac-toe");
  let winner = document.getElementsByClassName("winner")[0];
  let gameMenu = document.getElementsByClassName("gameMenu")[0];
  let mainMenu = document.getElementsByClassName("menuBtn")[0];

  if (a == b && b == c) {
    winner.textContent =
      a === "O"
        ? document.getElementsByClassName("opponent-text")[1].innerHTML
        : document.getElementsByClassName("opponent-text")[0].innerHTML;
    gameMenu.classList.add("blur");
    blur.appendChild(winner);
    blur.appendChild(mainMenu);
    mainMenu.style.display = "";
    i = 0;
    result = 1;
    return result;
  } else if (i == 9) {
    winner.textContent = "Draw";
    gameMenu.classList.add("blur");
    blur.appendChild(winner);
    blur.appendChild(mainMenu);
    mainMenu.style.display = "";
    i = 0;
    result = 1;
    return result;
  }

  return result;
}

function checkSquares(num) {
  switch (num) {
    case 0:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[4].innerHTML,
        document.getElementsByClassName("square")[8].innerHTML
      );
      break;
    case 2:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[4].innerHTML,
        document.getElementsByClassName("square")[6].innerHTML
      );
      break;
    case 4:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[0].innerHTML,
        document.getElementsByClassName("square")[8].innerHTML
      );
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[2].innerHTML,
        document.getElementsByClassName("square")[6].innerHTML
      );
      break;
    case 6:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[2].innerHTML,
        document.getElementsByClassName("square")[4].innerHTML
      );
      break;
    case 8:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[0].innerHTML,
        document.getElementsByClassName("square")[4].innerHTML
      );
      break;
  }

  switch (Math.floor(num / 3)) {
    case 0:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num + 3].innerHTML,
        document.getElementsByClassName("square")[num + 6].innerHTML
      );
      break;
    case 1:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num - 3].innerHTML,
        document.getElementsByClassName("square")[num + 3].innerHTML
      );
      break;
    case 2:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num - 3].innerHTML,
        document.getElementsByClassName("square")[num - 6].innerHTML
      );
      break;
  }

  switch (Math.floor(num % 3)) {
    case 0:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num + 1].innerHTML,
        document.getElementsByClassName("square")[num + 2].innerHTML
      );
      break;
    case 1:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num - 1].innerHTML,
        document.getElementsByClassName("square")[num + 1].innerHTML
      );
      break;
    case 2:
      checkWin(
        document.getElementsByClassName("square")[num].innerHTML,
        document.getElementsByClassName("square")[num - 1].innerHTML,
        document.getElementsByClassName("square")[num - 2].innerHTML
      );
      break;
  }

  if (result == 1) return;
}

function gameMove(squareSelected) {
  const square = document.getElementsByClassName("square")[squareSelected];
  let playerChange = document.getElementsByClassName("turn")[0];

  if (square.innerHTML.includes("X") || square.innerHTML.includes("O")) return;

  square.textContent = i % 2 === 0 ? "X" : "O";
  i++;

  checkSquares(squareSelected);

  if (result == 1) return (result = 0);
  playerChange.textContent = playerChange.textContent === document.getElementsByClassName("opponent-text")[1].innerHTML + " O"
      ? document.getElementsByClassName("opponent-text")[0].innerHTML + " X"
      : document.getElementsByClassName("opponent-text")[1].innerHTML + " O";

  if (document.getElementsByClassName("opponent-img")[0].alt == "bot") {
    easyBot();
  }
  if (document.getElementsByClassName("opponent-img")[1].alt == "bot") {
    easyBot();
  }

}

function easyBot() {
  let randSpot = Math.floor(Math.random() * 9);
  let botMove = document.getElementsByClassName("square")[randSpot];
  let xo = i % 2 === 0 ? "X" : "O";
  let playerChange2 = document.getElementsByClassName("turn")[0];

  if (botMove.innerHTML == "") {
    botMove.textContent = xo;
    i++;
    checkSquares(randSpot);
    playerChange2.textContent = playerChange2.textContent === document.getElementsByClassName("opponent-text")[1].innerHTML + " O"
    ? document.getElementsByClassName("opponent-text")[0].innerHTML + " X"
    : document.getElementsByClassName("opponent-text")[1].innerHTML + " O";
  } else {
    easyBot();
  }

  
  if (document.getElementsByClassName("opponent-img")[0].alt == "humen" || document.getElementsByClassName("opponent-img")[1].alt == "humen") {
    if (result == 1) return (result = 0);
    return;
  } else {
    easyBot();
  }

  if (result == 1) return (result = 0);
}

function restart() {
  let x = 0;
  while (x < 9) {
    document.getElementsByClassName("square")[x].textContent = "";
    x++;
  }
  document.getElementsByClassName("winner")[0].textContent = "";
  document.getElementsByClassName("gameMenu")[0].classList.remove("blur");
  document.getElementsByClassName("menuBtn")[0].style.display = "none";
  i = 0;
  if (document.getElementsByClassName("opponent-img")[0].alt == "bot") {
    easyBot();
  }
}

document
  .getElementsByClassName("menuBtn")[0]
  .addEventListener("click", () => switchScreen());
