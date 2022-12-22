let end = 1699830000;
setInterval(() => {
  let left = end - Math.floor(new Date().getTime() / 1e3);
  console.log(left);
  let segundos = Math.floor(left % 60);
  let minutos = Math.floor(((left - segundos) % 3600) / 60);
  let horas = Math.floor(((left - minutos * 60) / 3600) % 24);
  let dias = Math.floor((left - horas * 3600) / 3600 / 24);
  document.getElementById("segundos").innerHTML = segundos
    .toString()
    .padStart(2, "0");
  document.getElementById("minutos").innerHTML = minutos
    .toString()
    .padStart(2, "0");
  document.getElementById("horas").innerHTML = horas
    .toString()
    .padStart(2, "0");
  document.getElementById("dias").innerHTML = dias.toString().padStart(2, "0");
}, 0.5e3);
