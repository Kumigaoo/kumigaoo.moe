function shuffle(a) {
  c = a.length;
  while (c)
    (b = (Math.random() * (--c + 1)) | 0),
      (d = a[c]),
      (a[c] = a[b]),
      (a[b] = d);
  return a;
}

function choosing() {
  let names = {
    Tieguanyin: "Tieguanyin AAAAA",
    Osmanthus: "Osmanthus Tieguanyin AAA",
    LRP: "Lu Rou Pian",
    BNLG: "Bai Nian Lao Gushu",
    Yunwu: "Yunwu",
    TLS: "Tarry Lapsang Souchong",
  };
  let array = [];
  document.querySelectorAll("[type=checkbox]:checked").forEach((el) => {
    array.push(el.names);
    document.getElementById("Té").innerHTML = names[array[0]];
  });
}
