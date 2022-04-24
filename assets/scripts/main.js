const header = document.querySelector("header");

window.onscroll = function () {
  if (window.innerWidth >= 1200) {
    if (window.pageYOffset > header.offsetTop) {
      header.style.backgroundColor = "#fff";
      return;
    }

    header.style.backgroundColor = "transparent";
  }
};

window.onresize = function () {
  if (window.innerWidth < 1200) {
    header.style.backgroundColor = "#fff";
    return;
  }
};
