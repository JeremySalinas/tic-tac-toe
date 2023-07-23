const audio = document.getElementById("backgroundMusic");
audio.volume = 0.05;

function mute() {
  let audio = document.getElementById("backgroundMusic");
  let audioIcon = document.getElementById("muteAudio");
  audio.muted = !audio.muted;

  audioIcon.src =
    audioIcon.alt === "unmuted"
      ? "source/img/muted.png"
      : "source/img/unmuted.png";
  audioIcon.alt = audioIcon.alt === "unmuted" ? "muted" : "unmuted";
}

const togglePlayer = (playerNumber) => {
  let opponentSwitchImg =
    document.getElementsByClassName("opponent-img")[playerNumber];
  let opponentText =
    document.getElementsByClassName("opponent-text")[playerNumber];

  opponentSwitchImg.src =
    opponentSwitchImg.alt === "humen"
      ? "source/img/bot.png"
      : "source/img/humen.png";
  opponentSwitchImg.alt = opponentSwitchImg.alt === "humen" ? "bot" : "humen";
  opponentText.textContent =
    opponentSwitchImg.alt === "humen" ? "bot" : "player";
};
