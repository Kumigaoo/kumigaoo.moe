function ranval(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var contador = 2.3;
var contadorInv = 1;

document.getElementsByClassName("moth")[0].addEventListener("click", (_) => {
  let cajas = Object.values(
    document.getElementsByClassName("random")[0].children
  );
  document.getElementsByClassName("extras")[0].style.display = "";
  document.getElementsByClassName("random")[0].style.display = "flex";
  if (contador <= 0.5) {
    contador = 0;
    document.getElementsByClassName("box")[0].style.animation =
      "heartbeat " + contador + "s infinite";
    document.getElementById("heart").pause();
    document.getElementById("music").pause();
    document.body.style.backgroundImage =
      "url('/images/p5papqqm7gjeayk55ifjhg62znddy5tf_hq-modified.jpg')";
  } else {
    document.getElementsByClassName("box")[0].style.animation =
      "heartbeat " + contador + "s infinite";

    document.getElementById("heart").play();
    document.getElementById("music").play();
    document.getElementById("heart").playbackRate = contadorInv;
    contador -= 0.34;
    if (contador < 1.96) contadorInv = 1.2;
    if (contador < 1.62) contadorInv = 1.45;
    if (contador < 1.28) contadorInv = 1.75;
    if (contador < 0.94) contadorInv = 2.5;
    if (contador < 0.6) contadorInv = 3.5;
  }
  cajas.forEach((caja) => {
    caja.style.width = ranval(5, 40) + "%";
    caja.style.heigh = ranval(5, 15) + "%";
    caja.style.top = ranval(1, 90) + "%";
    caja.style.left = ranval(1, 90) + "%";
    caja.style.fontSize = ranval(20, 77) + "px";
  });
});
document.getElementsById("mainBox")[0].addEventListener("click", (_) => {});
