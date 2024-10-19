const KlikMenu = document.getElementById("klik-menu");

KlikMenu.addEventListener("click", function () {
const liElements = document.querySelectorAll(".nav-ul-head li");

  const ContackUs = document.querySelector(".contact-us");
  const ul = document.querySelector(".nav-ul-head");
  const LogoBrand = document.querySelector(".logo-brand");

  const icon1 = document.querySelector(".bx-menu");
  const icon2 = document.querySelector(".bx-x");

  // Toggle ul visibility
  if (ul.classList.contains("visible")) {
    ul.classList.remove("visible"); // Sembunyikan menu
  } else {
    ul.classList.add("visible"); // Tampilkan menu
  }

  // Toggle icon display
  if (icon1.style.display === "none") {
    icon1.style.display = "block"; // Show menu icon
    icon2.style.display = "none"; // Hide close icon
  } else {
    icon1.style.display = "none"; // Hide menu icon
    icon2.style.display = "block"; // Show close icon
  }

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

  liElements.forEach(function (li) {
    if (li.style.display === "block") {
      ul.style.backgroundColor = "transparent";
      li.style.display = "none";
    } else {
      ul.style.backgroundColor = "white";
      li.style.display = "block";
    }
  });
});
