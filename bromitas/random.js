function ranval(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementsByClassName("moth")[0].addEventListener("click", (_) => {
  let cajas = Object.values(
    document.getElementsByClassName("random")[0].children
  );
  console.log(cajas);
  cajas.forEach((caja) => {
    caja.style.width = ranval(7, 77) + "%";
    caja.style.heigh = ranval(7, 77) + "%";
    caja.style.top = ranval(0, 100) + "%";
    caja.style.left = ranval(0, 100) + "%";
    caja.style.fontSize = ranval(10, 77) + "px";
  });
});
