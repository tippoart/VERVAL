const KlikMenu = document.getElementById("klik-menu");
KlikMenu.addEventListener("click", function () {
  const liElements = document.querySelectorAll("ul.navbar-nav li");
  const ContackUs = document.querySelector(".contact-us");
  const LogoBrand = document.querySelector(".logo-brand");
  const ul = document.querySelector("ul");

  const icon1 = document.querySelector(".bx-menu");
  const icon2 = document.querySelector(".bx-x");

  const our = document.getElementById("navbar");
  const headerUtama = document.getElementById("header-utama");

  // Toggle ul visibility
  if (ul.classList.contains("visible")) {
    ul.classList.remove("visible");
  } else {
    ul.classList.add("visible");
  }

  // Toggle icon display
  if (icon1.style.display === "none") {
    icon1.style.display = "block"; // Show menu icon
    icon2.style.display = "none"; // Hide close icon
  } else {
    icon1.style.display = "none"; // Hide menu icon
    icon2.style.display = "block"; // Show close icon
  }

  // Toggle ContactUs display
  if (ContackUs.style.display === "block") {
    ContackUs.style.display = "none";
  } else {
    ContackUs.style.display = "block";
  }

  // Toggle LogoBrand display
  if (LogoBrand.style.display === "block") {
    LogoBrand.style.display = "none";
  } else {
    LogoBrand.style.display = "block";
    LogoBrand.style.zIndex = "4";
  }

  // Toggle li elements display
  liElements.forEach(function (li) {
    if (li.style.display === "block") {
      ul.style.backgroundColor = "transparent";
      li.style.display = "none";
    } else {
      ul.style.backgroundColor = "white";
      li.style.display = "block";
    }
  });

  // Toggle z-index for headerUtama and our
  if (headerUtama.style.zIndex === "4") {
    headerUtama.style.zIndex = "1";
    our.style.zIndex = "4";
  } else {
    headerUtama.style.zIndex = "4";
    our.style.zIndex = "0";
  }
});
