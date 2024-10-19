const KlikMenu = document.getElementById("klik-menu");

KlikMenu.addEventListener("click", function () {
  const liElements = document.querySelectorAll("ul.navbar-nav li");
  const ContackUs = document.querySelector(".contact-us");
  const LogoBrand= document.querySelector(".logo-brand");
  const ul = document.querySelector("ul");

  if (ContackUs.style.display === "block") {
    ContackUs.style.display = "none";
  } else {
    ContackUs.style.display = "block";
   
  }
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
