const togglePlayer = (playerNumber) => {
  let opponentSwitchImg = document.getElementsByClassName("opponent-img")[playerNumber];
  let opponentText = document.getElementsByClassName("opponent-text")[playerNumber];

  if (opponentSwitchImg.alt == "humen") {
    opponentSwitchImg.src = "source/img/bot.png";
    opponentSwitchImg.alt = "bot";
    opponentText.textContent = "bot";
  } else {
    opponentSwitchImg.src = "source/img/humen.png";
    opponentSwitchImg.alt = "humen";
    opponentText.textContent = "player";
  }
};