window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.getElementById("star").play();
    Game.init("canvas");
  };
};
