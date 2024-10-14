const KlikMenu = document.getElementById("klik-menu");

KlikMenu.addEventListener("click", function () {
  const liElements = document.querySelectorAll("ul.navbar-nav li");
  const ContackUs = document.querySelector(".contact-us");
  const ul = document.querySelector("ul");

  if (ContackUs.style.display === "block") {
    ContackUs.style.display = "none";
  } else {
    ContackUs.style.display = "block";
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
