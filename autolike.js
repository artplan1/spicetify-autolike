// @ts-check

// NAME: Autolike
// AUTHOR: artemkozaev
// DESCRIPTION: Autolike

/// <reference path="../globals.d.ts" />

(function Autolike() {
  const heart = document.querySelector(".control-button-heart");

  if (!heart || !Spicetify.Player) {
    setTimeout(Autolike, 100);
    return;
  }

  Spicetify.Player.addEventListener("onprogress", watchChange);

  function watchChange(v) {
    if (
      Spicetify.Player.isPlaying() &&
      Spicetify.Player.getProgressPercent() > 0.95 &&
      heart.ariaChecked === "false"
    ) {
      Spicetify.showNotification("Will be autoliked...");

      heart.click();
    }
  }
})();
