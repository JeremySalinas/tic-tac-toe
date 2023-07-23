const audio = document.getElementById("backgroundMusic");
audio.volume = 0.05;

function mute() {
  let audio = document.getElementById("backgroundMusic");
  let audioIcon = document.getElementById("muteAudio");
  audio.muted = !audio.muted;

  if (audioIcon.alt == "unmuted") {
    audioIcon.src = "source/img/muted.png";
    audioIcon.alt = "muted";
  } else {
    audioIcon.src = "source/img/unmuted.png";
    audioIcon.alt = "unmuted";
  }
}

const togglePlayer = (playerNumber) => {
  let opponentSwitchImg =
    document.getElementsByClassName("opponent-img")[playerNumber];
  let opponentText =
    document.getElementsByClassName("opponent-text")[playerNumber];

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
