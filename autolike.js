// @ts-check

// NAME: Autolike
// AUTHOR: artemkozaev
// DESCRIPTION: Autolike

/// <reference path="../globals.d.ts" />

(function Autolike() {
  const player = Spicetify.Player;

  if (!getLikeButton() || !player) {
    setTimeout(Autolike, 100);
    return;
  }

  player.addEventListener("onprogress", watchChange);

  const DEBOUNCE_TIME = 3000;
  const LIKE_THRESHOLD = 0.95;
  let debouncing = 0;

  function watchChange(event) {
    // run only once per 3 seconds
    if (debouncing) {
      if (event.timeStamp - debouncing > DEBOUNCE_TIME) debouncing = 0;
      return;
    }

    debouncing = event.timeStamp;

    const heart = getLikeButton();

    if (
      heart.ariaChecked === "true" ||
      !player.isPlaying() ||
      player.getProgressPercent() < LIKE_THRESHOLD
    )
      return;

    heart.click();
  }

  function getLikeButton() {
    return document.querySelector(".control-button-heart");
  }
})();
