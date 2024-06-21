var firstClick = true;
var secondClick = true;
var isToggleImageRunning = false;

function toggleImage(callback) {
  console.log("toggleImage dimulai");
  let imgs = document.getElementsByClassName("img");
  let imgCard = document.getElementById("img-container");

  if (firstClick) {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "block";
      imgs[i].style.cursor = "default";
    }
    firstClick = false;
    console.log("toggleImage selesai (pertama kali)");
    callback(); // Panggil callback setelah pertama kali
  } else if (secondClick) {
    imgCard.classList.add("centered");
    secondClick = false;
    console.log("toggleImage selesai (kedua kali)");
    callback();
  }
}

// Variabel Baru
const imageContainer = document.getElementById("img-container");
let currentIndex = 0;
const imageWidth = document.querySelector(".img").clientWidth + 3; // lebar setiap gambar + margin-right
const totalImages = document.getElementsByClassName("img").length;

// Fungsi untuk memeriksa apakah elemen berada di tengah viewport
function isElementInViewportCenter(el) {
  const rect = el.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const viewportWidth = window.innerWidth;
  const elementCenterY = rect.top + rect.height / 2;
  const elementCenterX = rect.left + rect.width / 2;

  return (
    elementCenterY >= viewportHeight / 4 &&
    elementCenterY <= (3 * viewportHeight) / 4 &&
    elementCenterX >= viewportWidth / 4 &&
    elementCenterX <= (3 * viewportWidth) / 4
  );
}

window.addEventListener("wheel", function (e) {
  if (!isToggleImageRunning) {
    isToggleImageRunning = true;

    if (isElementInViewportCenter(imageContainer)) {
      toggleImage(function () {
        // Menentukan arah scroll
        const scrollDirection = Math.sign(e.deltaY);

        // Menghitung indeks baru berdasarkan arah scroll
        if (scrollDirection === 1) {
          // Scroll ke bawah (gambar berikutnya)
          currentIndex = (currentIndex + 1) % totalImages;
        } else if (scrollDirection === -1) {
          // Scroll ke atas (gambar sebelumnya)
          currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        }

        // Scroll ke gambar baru
        imageContainer.scrollTo({
          left: currentIndex * imageWidth,
          behavior: "smooth",
        });

        // Mencegah perilaku scroll default
        e.preventDefault();

        isToggleImageRunning = false;
      });
    } else {
      isToggleImageRunning = false;
    }
  }
});

// Memeriksa kapan bagian (`section`) berada dalam tampilan untuk membuat kartu tetap (`fixed`)
const section = document.getElementById("section2");

window.addEventListener("scroll", function () {
  const sectionRect = section.getBoundingClientRect();
  const containerRect = imageContainer.getBoundingClientRect();

  if (sectionRect.top <= 0 && sectionRect.bottom >= window.innerHeight) {
    imageContainer.classList.add("fixed");
  } else {
    imageContainer.classList.remove("fixed");
  }
});



// verval3
let clickCount = 0;
let emb = document.getElementsByClassName("emb");
let emb2 = document.getElementsByClassName("emb2");
let emb3 = document.getElementsByClassName("emb3");

let icon = document.querySelector(".icon");
let ourValues = document.querySelector(".our-values");
let iconImg = document.querySelector(".bumi");
let verval3CardImgs = document.querySelectorAll(".verval3-card img");

let bumiIcon = document.querySelector(".bumi-icon");
let our = document.querySelector(".our");

function verval3() {
  // Initial animations on first scroll
  if (clickCount === 0) {
    if (icon) {
      icon.style.backgroundColor = "white";
    }
    if (iconImg) {
      iconImg.style.transform = "translateX(2.9rem)";
      iconImg.style.backgroundColor = "#3ABEF9";
      iconImg.style.borderRadius = "50%";
    }
    if (emb) {
      emb[0].style.color = "white";
    }
    if (emb2) {
      emb2[0].style.color = "white";
    }
  } else if (clickCount === 1) {
    if (ourValues) {
      ourValues.style.color = "rgb(130, 185, 68)";
    }

    if (emb3) {
      emb3[0].style.color = "white";
    }
  } else if (clickCount === 2) {
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
      verval3Section.style.cursor = "auto";
    }
  }

  clickCount++;
}

//verval 1

let imgContainer = document.querySelector(".img1");
let img = document.querySelector(".img1 img");
function verval1() {
  // Check if imgContainer and img are found
  if (imgContainer && img) {
    let containerRect = imgContainer.getBoundingClientRect();
    let scrollPosition =
      this.window.pageYOffset || document.documentElement.scrollTop;
    let movement = (scrollPosition - containerRect.top) * -0.1;

    img.style.transform = "translateY(" + movement + "px)";
  }
}

//verval 4
let card = document.querySelector(".verval4 .verval4-card");
let carouselIcons = document.querySelectorAll(".verval4 .bx");
let nameCard = document.querySelector(".verval4 .name-card");
let testimoni = document.querySelector(".testimoni");

function verval4() {
  if (card) {
    card.style.backgroundSize = "80rem";
    card.style.opacity = "1"; // Tambahkan ini
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
