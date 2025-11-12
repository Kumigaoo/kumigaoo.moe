function ranval(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var cajas = Object.values(document.getElementsByClassName("Im")[0].children);
window.setTimeout((_) => {
  document.getElementsByClassName("Im")[0].style.display = "flex";
  movimiento();
}, 3000);
var id = setInterval(movimiento, 80);
function movimiento() {
  cajas.forEach((caja) => {
    caja.style.width = ranval(5, 40) + "%";
    caja.style.heigh = ranval(5, 15) + "%";
    caja.style.top = ranval(-10, 90) + "%";
    caja.style.left = ranval(-10, 90) + "%";
    caja.style.fontSize = ranval(5, 20) + "vw";
    if (Math.random() >= 0.5) {
      caja.style.color = "black";
    } else {
      caja.style.color = "white";
    }
  });
}

let frases = {
  kumi: () => (window.location.href = "/kumi"),
  lila: () => (window.location.href = "/home"),
};

let keys = "";
let showingmessage = false;
document.addEventListener("keydown", (event) => {
  if (showingmessage) return;
  keys += event.key;
  let options = Object.keys(frases).filter((i) => i.startsWith(keys));
  let timeout = 0.5e3;
  if (options.length == 0) return;
  if (options.length == 1) timeout = 1;
  setTimeout(() => {
    if (!frases.hasOwnProperty(keys) || showingmessage) return;
    if (typeof frases[keys] == "function") {
      frases[keys]();
      keys = "";
      return;
    }
    keys = "";
  }, timeout);
});
