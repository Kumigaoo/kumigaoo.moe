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
    JazmineGreen: "Molihua Cha",
    BHYZ: "Bai Hao Yin Zhen",
    TaipingHou: "Tai Ping Hou Kue",
    HSHY: "Huon Sha Huang Ya",
    Yiwu: "Yiwu Sheng",
    Houji: "Bancha Houji-Cha",
    ButangZG: "Butang Zhu Gushu",
    Bai Mu Dang: "Bai Mu Dang",
    Prensed BMD: "Prensed Bai Mu Dang",
    TMZS:"Tai Mu Zhen Shan",
    Bai Long Zhu: "Bai Long Zhu",
    Prensed Lai Bai Cha: "Prensed Lai Bai Cha",
    WGrapefruit: "White Grapefruit",
    Kekecha: "Kekecha",
    Kashmiri: "Kashmiri",
    GreenEG: "Green Earl Grey",
    Houji: "Bancha Houji-Cha",
    XiangC: "Xiang Cha",
    ABC:"Anji Bai Cha",
    XHLJ: "Xi Hu Long Jing",
    Biluo:"Biluochun",
    XYMJ:"Xing Yan Mao Jiang",
    Gunpowder:"Gunpowder Pinhead",
    HSMF:"Huang Shan Mao Feng",
    ZYQ: "Zhu Yu Qing",
    XYMJ: "Xin Yang Mao Jing",
    Qe: "Qe She",
    THK: "Taiping Hou Kui",
    

  };
  let array = [];
  document.querySelectorAll("[type=checkbox]:checked").forEach((el) => {
    array.push(el.id);
    document.getElementById("Té").innerHTML = names[shuffle(array)[0]];
  });
}
