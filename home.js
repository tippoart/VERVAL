//verval 1

// window.addEventListener("scroll", function () {
//   let imgContainer = document.querySelector(".img1");
//   let img = document.querySelector(".img1 img");

//   // Check if imgContainer and img are found
//   if (imgContainer && img) {
//     let containerRect = imgContainer.getBoundingClientRect();
//     let scrollPosition =
//       this.window.pageYOffset || document.documentElement.scrollTop;
//     let movement = (scrollPosition - containerRect.top) * -0.1;

//     img.style.transform = "translateY(" + movement + "px)";
//   }
// });

// verval2
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
    secondClick = false; // Pastikan ini diatur agar logika tidak terus-menerus dieksekusi
  }
}


//verval3
let clickCount = 0;

function verval3() {
  let icon = document.querySelector(".icon");
  let ourValues = document.querySelector(".our-values");
  let iconImg = document.querySelector(".bumi");
  let verval3CardImgs = document.querySelectorAll(".verval3-card img");

  let bumiIcon = document.querySelector(".bumi-icon");
  let our = document.querySelector(".our");

  // Initial animations on first scroll
  if (clickCount === 0) {
    if (ourValues) {
      ourValues.style.color = "rgb(130, 185, 68)";
    }
    if (icon) {
      icon.style.backgroundColor = "rgb(130, 185, 68)";
    }
    if (iconImg) {
      iconImg.style.transform = "translateX(2.9rem)";
    }
  } else if (clickCount === 1) {
    // Fade out .bumi-icon and .our on second scroll
    if (bumiIcon) {
      bumiIcon.classList.add("fade-out");
    }
    if (our) {
      our.classList.add("fade-out");
    }

    // Show the first card
    if (verval3CardImgs.length > 0) {
      verval3CardImgs[0].classList.add("show", "large");
    }

    setTimeout(() => {
      if (bumiIcon) {
        bumiIcon.style.display = "none";
      }
      if (our) {
        our.style.display = "none";
      }
    }, 1000);
  } else {
    // Handling subsequent scrolls to show more cards
    if (clickCount - 1 < verval3CardImgs.length) {
      if (clickCount > 1) {
        verval3CardImgs[clickCount - 2].style.transform = "scale(0.97)";
      }

      if (clickCount > 2) {
        verval3CardImgs[clickCount - 3].style.transform = "scale(0.93)";
      }

      verval3CardImgs[clickCount - 1].classList.add("show", "large");

      if (clickCount >= 4) {
        verval3CardImgs[clickCount - 4].style.transform = `translateY(${
          6 * (clickCount - 2)
        }%) scale(0.6)`;
      }
    } else {
      // Disable further scrolling when all cards are shown
      let verval3Section = document.querySelector(".verval3");
      verval3Section.style.overflow = "hidden";
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
