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
  });
}
