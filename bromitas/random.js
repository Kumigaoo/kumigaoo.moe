function ranval(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementsByClassName("moth")[0].addEventListener("click", (_) => {
  let cajas = Object.values(
    document.getElementsByClassName("random")[0].children
  );
  document.getElementsByClassName("random")[0].style.display = "flex";
  cajas.forEach((caja) => {
    caja.style.width = ranval(5, 40) + "%";
    caja.style.heigh = ranval(5, 15) + "%";
    caja.style.top = ranval(1, 90) + "%";
    caja.style.left = ranval(1, 90) + "%";
    caja.style.fontSize = ranval(20, 77) + "px";
    document.getElementById("music").play();
  });
});
