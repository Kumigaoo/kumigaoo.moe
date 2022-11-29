let prevkey = " ";
document.addEventListener("keydown", (event) => {
  if (event.key == "5") {
    document.getElementsByClassName("culo")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("culo")[0].style.display = "none";
    }, 5e3);
  } else if (prevkey == "1" && event.key == "3") {
    document.getElementsByClassName("agarrame")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("agarrame")[0].style.display = "none";
    }, 5e3);
  } else if (event.key == "1") {
    document.getElementsByClassName("vacuno")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("vacuno")[0].style.display = "none";
    }, 5e3);
  } else if (event.key == "3") {
    document.getElementsByClassName("reves")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("reves")[0].style.display = "none";
    }, 5e3);
  } else if (event.key == "4") {
    document.getElementsByClassName("aparato")[0].style.display = "flex";
    setTimeout(() => {
      document.getElementsByClassName("aparato")[0].style.display = "none";
    }, 5e3);
  }
  prevkey = event.key;
});
