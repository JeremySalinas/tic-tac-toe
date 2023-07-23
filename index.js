const togglePlayer = (playerNumber) => {
  let opponentSwitchImg = document.getElementsByClassName("opponent-img")[playerNumber];
  let opponentText = document.getElementsByClassName("opponent-text")[playerNumber];

  if (opponentSwitchImg.alt == "humen") {
    opponentSwitchImg.src = "source/ai.png";
    opponentSwitchImg.alt = "bot";
    opponentText.textContent = "bot";
  } else {
    opponentSwitchImg.src = "source/humen.png";
    opponentSwitchImg.alt = "humen";
    opponentText.textContent = "player";
  }
};