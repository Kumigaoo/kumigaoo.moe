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
    Bancha: "Bancha",
    Houji: "Houjicha",
    ButangZG: "Butang Zhu Gushu",
    BaiMuDang: "Bai Mu Dang",
    PrensedBMD: "Prensed Bai Mu Dang",
    TMZS: "Tai Mu Zhen Shan",
    BaiLongZhu: "Bai Long Zhu",
    PrensedLaiBaiCha: "Prensed Lai Bai Cha",
    WGrapefruit: "White Grapefruit",
    Kekecha: "Kekecha",
    Kashmiri: "Kashmiri",
    GreenEG: "Green Earl Grey",
    Houji: "Bancha Houji-Cha",
    XiangC: "Xiang Cha",
    ABC: "Anji Bai Cha",
    XHLJ: "Xi Hu Long Jing",
    Biluo: "Biluochun",
    XYMJ: "Xing Yan Mao Jiang",
    Gunpowder: "Gunpowder Pinhead",
    HSMF: "Huang Shan Mao Feng",
    ZYQ: "Zhu Yu Qing",
    XYMJ: "Xin Yang Mao Jing",
    Qe: "Qe She",
    THK: "Taiping Hou Kui",
    Sencha: "Sencha",
    BasicKuki: "BasicKuki",
    KukichaShira: "Kukicha Shiraore",
    Kabusecha: "Kabusecha",
    KabusechaJ30: "Kabusecha J30",
  };
  let array = [];
  document.querySelectorAll("[type=checkbox]:checked").forEach((el) => {
    array.push(el.id);
    document.getElementById("Té").innerHTML = names[shuffle(array)[0]];
  });
}
