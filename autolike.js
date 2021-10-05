// @ts-check

// NAME: Autolike
// AUTHOR: artemkozaev
// DESCRIPTION: Autolike

/// <reference path="../globals.d.ts" />

(function Autolike() {
  if (!document.querySelector(".control-button-heart") || !Spicetify.Player) {
    setTimeout(Autolike, 100);
    return;
  }

  Spicetify.Player.addEventListener("onprogress", watchChange);

  function watchChange(v) {
    const heart = document.querySelector(".control-button-heart");

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
