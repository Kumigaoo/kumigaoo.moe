let frases = {
  1: "Por el culo te vacuno",
  3: "Te la meto del reves",
  4: "Por tu culo mi aparato",
  5: "Por el culo te la hinco",
  6: "Si os agachais me la veis",
  7: "Por el culo se te mete",
  8: "Por el culo te la entocho",
  9: "Agarrame la que se me mueve",
  13: "Agarrame la que me crece",
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
    document.getElementById("rimas").innerHTML = frases[keys];
    document.getElementById("rimas").style.display = "flex";
    showingmessage = true;
    setTimeout(() => {
      document.getElementById("rimas").style.display = "none";
      showingmessage = false;
    }, 4e3);
    keys = "";
  }, timeout);
});
