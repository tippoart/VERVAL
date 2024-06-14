
// header





window.addEventListener("scroll", function () {
  let imgContainer = document.querySelector(".img1");
  let img = document.querySelector(".img1 img");
  let containerRect = imgContainer.getBoundingClientRect();
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  let movement = (scrollPosition - containerRect.top) * -0.1;

  img.style.transform = "translateY(" + movement + "px)";
});

// verval 2
let firstClick = true;
let secondClick = true;

function toggleImage() {
  let imgs = document.getElementsByClassName("img");
  let imgCard = document.getElementById("img-container");

  if (firstClick) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "block";
      imgs[i].style.cursor = "default";
    }
    firstClick = false;
  } else if (secondClick) {
    imgCard.classList.add("centered");
    secondClick = false;
  }
}

//verval3
let clickCount = 0;

function verval3() {
  let verval3 = document.getElementsByClassName("verval3");
  let icon = document.getElementsByClassName("icon");
  let ourValues = document.getElementsByClassName("our-values");
  let iconImg = document.getElementsByClassName("bumi");
  let verval3CardImgs = document.querySelectorAll(".verval3-card img");
  let bumiIcon = document.querySelector(".bumi-icon");
  let our = document.querySelector(".our");

  if (clickCount === 0) {
    // First click: run initial animations
    if (ourValues.length > 0) {
      ourValues[0].style.color = "rgb(130, 185, 68)";
    }
    if (icon.length > 0) {
      icon[0].style.backgroundColor = "rgb(130, 185, 68)";
    }
    if (iconImg.length > 0) {
      iconImg[0].style.transform = "translateX(2.9rem)";
    }
  } else if (clickCount === 1) {
    // Second click: fade out .bumi-icon and .our
    if (bumiIcon) bumiIcon.classList.add("fade-out");
    if (our) our.classList.add("fade-out");

    // Show the first card
    if (verval3CardImgs.length > 0) {
      verval3CardImgs[0].classList.add("show");
    }

    setTimeout(() => {
      if (bumiIcon) bumiIcon.style.display = "none";
      if (our) our.style.display = "none";
    }, 1000);
  } else {
    if (clickCount - 1 < verval3CardImgs.length) {
      verval3CardImgs[clickCount - 1].classList.add("show");
    } else {
      verval3[0].style.cursor = "auto";
    }
  }

  clickCount++;
}

// verval 4

function verval4() {
  let card = document.querySelector(".verval4 .verval4-card");
  let carouselIcons = document.querySelectorAll(".verval4 .bx");
  let nameCard = document.querySelector(".verval4 .name-card");
  let testimoni = document.querySelector(".testimoni");

  if (card) {
    card.style.backgroundSize = "80rem";
   
  }

  if (nameCard) {
    nameCard.setAttribute("data-aos", "zoom-in");
    nameCard.setAttribute("data-aos-once", "true");
    nameCard.style.opacity = "1";
  }
  if (testimoni) {
    testimoni.setAttribute("data-aos", "zoom-in");
    testimoni.setAttribute("data-aos-once", "true");
    testimoni.style.opacity = "1";
  }

  if (carouselIcons.length > 0) {
    carouselIcons.forEach((icon) => {
      icon.style.opacity = "1";
    });
  }
}
